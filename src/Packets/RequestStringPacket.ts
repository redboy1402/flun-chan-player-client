import {GamePacket} from './GamePacket';

export class RequestStringPacket extends GamePacket {


  public readonly message: string;
  public readonly maxLength: number;

  constructor(gameId: number, message: string, maxLength: number) {
    super("RequestString", gameId, [message, maxLength.toString()]);
    this.message = message;
    this.maxLength = maxLength;
  }
}
