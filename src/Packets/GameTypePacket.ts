import {GamePacket} from './GamePacket';

export class GameTypePacket extends GamePacket {
  public readonly gameName: string;

  constructor(gameNumber: number, gameName: string) {
    super('GameType', gameNumber, [gameName]);
    this.gameName = gameName;
  }

}
