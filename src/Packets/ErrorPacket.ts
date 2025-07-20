import {Packet} from './Packet';

export class ErrorPacket extends Packet {
  public readonly message: string;

  constructor(message: string) {
    super("Error", [message]);
    this.message = message;
  }
}
