import {Packet} from './Packet';

export class PongPacket extends Packet {
  constructor() {
    super("Pong", []);
  }
}
