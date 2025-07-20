import {GamePacket} from './GamePacket';

export class HostPacket extends GamePacket {

  public version: number;

  constructor(gameId: number, version: number) {
    super("Host", gameId, [version.toString()]);
    this.version = version;
  }
}
