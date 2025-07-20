export class ErrorPacket extends Packet {
  public message: string;

  constructor(message: string) {
    super("Error", [message]);
    this.message = message;
  }
}
