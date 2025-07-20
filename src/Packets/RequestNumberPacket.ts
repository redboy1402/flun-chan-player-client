import {GamePacket} from './GamePacket';

export class RequestNumberPacket extends GamePacket {


  public readonly message: string;
  public readonly lowerBound: number;
  public readonly upperBound: number;

  constructor(gameId: number, message: string, lowerBound: number, upperBound: number) {
    super("RequestNumber", gameId, [message, lowerBound.toString(), upperBound.toString()]);
    this.message = message;
    this.lowerBound = lowerBound;
    this.upperBound = upperBound;
  }
}
