import {GamePacket} from './GamePacket';

export class ResponseNumberPacket extends GamePacket {

  public readonly playerName: string;
  public readonly number: number;

  constructor(gameId: number, name: string, number: number) {
    super("ResponseNumber", gameId, [name, number.toString()]);
    this.number = number;
    this.playerName = name;
  }
}
