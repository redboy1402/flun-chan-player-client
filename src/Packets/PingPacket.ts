import {Packet} from './Packet';

export class PingPacket extends Packet {
  constructor() {
    super("Ping", []);
  }
}
