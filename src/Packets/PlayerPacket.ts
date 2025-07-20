import {GamePacket} from './GamePacket';

export class PlayerPacket extends GamePacket {

  public readonly version: number;
  public readonly playerName: string;

  constructor(gameId: number, version: number, playerName: string) {
    super("Player", gameId, [version.toString(), playerName]);
    this.version = version;
    this.playerName = playerName;
  }
}
