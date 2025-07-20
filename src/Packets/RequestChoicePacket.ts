import {GamePacket} from './GamePacket';

export class RequestChoicePacket extends GamePacket {

  public readonly message: string;
  public readonly options: string[];

  constructor(gameId: number, message: string, options: string[]) {
    super("RequestChoice", gameId, [message, options.toString()]);
    this.message = message;
    this.options = options;
  }
}
