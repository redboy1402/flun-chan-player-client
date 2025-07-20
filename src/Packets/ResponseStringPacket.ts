import {GamePacket} from './GamePacket';

export class ResponseStringPacket extends GamePacket {

  public readonly playerName: string;
  public readonly string: string;

  constructor(gameId: number, name: string, string: string) {
    super("ResponseString", gameId, [name, string]);
    this.string = string;
    this.playerName = name;
  }
}
