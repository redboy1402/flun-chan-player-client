import {Component, OnInit, signal, WritableSignal} from '@angular/core';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {SocketManager} from '../../Managers/SocketManager';
import {Packet} from '../../Packets/Packet';
import {PlayerPacket} from '../../Packets/PlayerPacket';
import {GameManager} from '../../Managers/GameManager';
import {GameTypePacket} from '../../Packets/GameTypePacket';

enum connectionStates {
  NO_LOBBY_ID,
  WAITING_FOR_CONNECTION,
  GAMING,
}

@Component({
  selector: 'home-page',
  imports: [FormsModule],
  templateUrl: '/home-page.html',
  standalone: true,
  styleUrl: '/home-page.css'
})
export class HomePage implements OnInit {
  gameId: WritableSignal<number | null> = signal(null);
  socket: SocketManager = null!;
  input: string = '';
  private router: Router;
  private game: GameManager;

  connectionStates = connectionStates;
  connectionState = connectionStates.NO_LOBBY_ID;

  constructor(socket: SocketManager, router: Router, gameManager: GameManager) {
    this.socket = socket;
    this.router = router;
    this.game = gameManager;
  }

  ngOnInit() {
    this.socket.onReceive.subscribe((packet: Packet) => {
      if (packet.name === 'GameType') {
        const gtPacket = packet as GameTypePacket;
        this.game.gameName = gtPacket.gameName;
        this.game.gameId = gtPacket.gameId;
        this.game.myName = this.input;
        this.router.navigate(['game'])
      }
    })
  }

  Next() {
    if (!this.socket.connected()) {
      location.reload();
    }
    if (this.gameId() === null) {
      let value = Number.parseFloat(this.input);
      if (!Number.isNaN(value)) {
        this.gameId.set(value)
        this.input = '';
      }
    } else {
      const hostPacket = new PlayerPacket(this.gameId()!, Packet.VERSION, this.input)
      this.socket.send(hostPacket)
    }
  }

  protected readonly title = signal('Flun Chan Games');

}
