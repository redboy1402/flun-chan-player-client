import {Component, OnInit, signal, WritableSignal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {SocketManager} from '../../Managers/SocketManager';
import {Packet} from '../../Packets/Packet';
import {PlayerPacket} from '../../Packets/PlayerPacket';
import {GameManager} from '../../Managers/GameManager';
import {GameTypePacket} from '../../Packets/GameTypePacket';


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

  constructor(socket: SocketManager, game: GameManager) {
    this.socket = socket;
    this.game = game;
  }

  ngOnInit() {
    this.socket.onReceive.subscribe((packet: Packet) => {
      if (packet.name === 'GameType') {
        const gtPacket = packet as GameTypePacket;
        this.game.gameName.set(gtPacket.gameName)
        this.game.gameId.set(gtPacket.gameId)

      }
    })
  }


  protected readonly title = signal('Flun Chan Games');

}
