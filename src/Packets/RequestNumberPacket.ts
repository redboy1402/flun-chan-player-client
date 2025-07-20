class RequestNumberPacket extends GamePacket {


  public message: string;
  public lowerBound: number;
  public upperBound: number;

  constructor(gameId: number, message: string, lowerBound: number, upperBound: number) {
    super("RequestNumber", gameId, [message, lowerBound.toString(), upperBound.toString()]);
    this.message = message;
    this.lowerBound = lowerBound;
    this.upperBound = upperBound;
  }
}
