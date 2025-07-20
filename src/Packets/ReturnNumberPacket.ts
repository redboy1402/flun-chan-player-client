class ReturnNumberPacket extends GamePacket {

  public playerName: string;
  public number: number;

  constructor(gameId: number, name: string, number: number) {
    super("ReturnNumber", gameId, [name, number.toString()]);
    this.number = number;
    this.playerName = name;
  }
}
