export class Packet {
  public static VERSION = 2;
  public readonly name: string;
  public readonly data: string[];

  protected constructor(name: string, data: string[]) {
    this.name = name;
    this.data = data;
  }

  public packetToString() {
    return `${this.name}|${this.data.join("|")}|EOF|`;
  }
}
