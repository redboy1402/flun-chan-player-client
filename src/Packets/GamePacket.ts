class GamePacket extends Packet {

  public gameId: number;

  protected constructor(name: string, gameId: number, data: string[]) {
    super(name, [gameId.toString(), ...data]);
    this.gameId = gameId;
  }

}
