class PlayerPacket extends GamePacket {

  public version: number;
  public playerName: string;

  constructor(gameId: number, version: number, playerName: string) {
    super("Host", gameId, [version.toString(), playerName]);
    this.version = version;
    this.playerName = playerName;
  }
}
