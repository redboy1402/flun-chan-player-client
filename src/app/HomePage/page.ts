import {Component, OnInit, signal, WritableSignal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {SocketManager} from '../../Managers/SocketManager';
import {Packet} from '../../Packets/Packet';
import {PlayerPacket} from '../../Packets/PlayerPacket';
import {Router} from '@angular/router';
import {GameManager} from '../../Managers/GameManager';
import {GameTypePacket} from '../../Packets/GameTypePacket';

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
  private gameManager: GameManager;

  constructor(socket: SocketManager, router: Router, gameManager: GameManager) {
    this.socket = socket;
    this.router = router;
    this.gameManager = gameManager;
  }

  ngOnInit() {

  }

  Next() {
    if (this.gameId() === null) {
      let value = Number.parseFloat(this.input);
      if (!Number.isNaN(value)) {
        this.gameId.set(value)
        this.input = '';
      }
    } else {
      const hostPacket = new PlayerPacket(this.gameId()!, Packet.VERSION, this.input)
      this.socket.send(hostPacket)
      this.router.navigate(['game'])
    }
  }

  protected readonly title = signal('Flun Chan Games');

}
