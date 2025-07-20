import {Component, computed, OnInit, signal, WritableSignal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {SocketManager} from '../../Managers/SocketManager';
import {Packet} from '../../Packets/Packet';
import {GameManager} from '../../Managers/GameManager';
import {GameTypePacket} from '../../Packets/GameTypePacket';
import {RequestChoicePacket} from '../../Packets/RequestChoicePacket';
import {RequestNumberPacket} from '../../Packets/RequestNumberPacket';
import {RequestStringPacket} from '../../Packets/RequestStringPacket';
import {ResponseChoicePacket} from '../../Packets/ResponseChoicePacket';
import {ResponseNumberPacket} from '../../Packets/ResponseNumberPacket';
import {ResponseStringPacket} from '../../Packets/ResponseStringPacket';
import {generate} from 'rxjs';
import {Router} from '@angular/router';


@Component({
  selector: 'game-page',
  imports: [FormsModule],
  templateUrl: '/game-page.html',
  standalone: true,
  styleUrl: '/game-page.css'
})
export class GamePage implements OnInit {
  socket: SocketManager = null!;
  protected game: GameManager;


  protected lastPacket: WritableSignal<RequestChoicePacket | RequestNumberPacket | RequestStringPacket | null> = signal(null);
  protected response = signal('');
  private router: Router;

  constructor(socket: SocketManager, game: GameManager, router: Router) {
    this.socket = socket;
    this.game = game;
    this.router = router;
  }

  ngOnInit() {
    if (this.game.gameId < 0) {
      this.router.navigate(['']);
    }
    this.socket.onReceive.subscribe((packet: Packet) => {
      switch (packet.name) {
        case 'RequestChoice':
          this.lastPacket.set(packet as RequestChoicePacket);
          break;
        case 'RequestString':
          this.lastPacket.set(packet as RequestStringPacket);
          break;
        case 'RequestNumber':
          this.lastPacket.set(packet as RequestNumberPacket);
          break;
      }
    })
  }


  protected readonly title = signal('Flun Chan Games');

  Submit() {
    switch (this.lastPacket()!.name) {
      case 'RequestChoice':
        this.socket.send(new ResponseChoicePacket(this.game.gameId, this.game.myName, Number.parseFloat(this.response())));
        break;
      case 'RequestString':
        this.socket.send(new ResponseStringPacket(this.game.gameId, this.game.myName, this.response()));
        break;
      case 'RequestNumber':
        this.socket.send(new ResponseNumberPacket(this.game.gameId, this.game.myName, Number.parseFloat(this.response())));
        break;
    }
    this.lastPacket.set(null);
    this.response.set('');
  }

  readonly choiceOptions = computed(() => {
    const packet = this.lastPacket();
    return packet?.name === 'RequestChoice'
      ? (packet as RequestChoicePacket).options
      : [];
  });
  protected readonly String = String;
  protected readonly Number = Number;
}
