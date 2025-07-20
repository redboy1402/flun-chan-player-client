import {GamePacket} from './GamePacket';

export class ResponseChoicePacket extends GamePacket {

  public readonly playerName: string;
  public readonly index: number;

  constructor(gameId: number, name: string, index: number) {
    super("ResponseChoice", gameId, [name, index.toString()]);
    this.index = index;
    this.playerName = name;
  }
}
