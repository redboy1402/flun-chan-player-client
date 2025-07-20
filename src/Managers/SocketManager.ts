import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Packet} from '../Packets/Packet';
import {stringToPacket} from '../Packets/stringToPacket';

@Injectable({
  providedIn: 'root'
})
export class SocketManager {
  private socket: WebSocket;
  private messageSubject: Subject<Packet> = new Subject<Packet>();
  public onReceive: Observable<Packet> = this.messageSubject.asObservable();

  constructor() {
    this.socket = new WebSocket('wss://api.flun.in');
    this.socket.onopen = () => console.log('WebSocket connected');
    this.socket.onmessage = msg => {

      let packet = stringToPacket(msg.data);
      if (packet === null) {
        console.log('Invalid Packet:', msg.data);
      } else {
        console.log('Received:', packet.packetToString());
        this.messageSubject.next(packet);
      }

    }
  }

  public send(packet: Packet) {
    this.socket.send(packet.packetToString())
  }
}
