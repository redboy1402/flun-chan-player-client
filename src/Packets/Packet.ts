class Packet {

  VERSION = 1;
  public name: string;
  public data: string[];

  protected constructor(name: string, data: string[]) {
    this.name = name;
    this.data = data;
  }

  PacketToString() {
    return `${this.name}|${this.data.join("|")}|EOF|`;
  }
}
