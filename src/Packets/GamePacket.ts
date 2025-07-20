import {Packet} from './Packet';

export class GamePacket extends Packet {

  public readonly gameId: number;

  protected constructor(name: string, gameId: number, data: string[]) {
    super(name, [gameId.toString(), ...data]);
    this.gameId = gameId;
  }

}
