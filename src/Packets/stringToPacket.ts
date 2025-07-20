import {HostPacket} from './HostPacket';
import {PlayerPacket} from './PlayerPacket';
import {RequestNumberPacket} from './RequestNumberPacket';
import {ResponseNumberPacket} from './ResponseNumberPacket';
import {PingPacket} from './PingPacket';
import {PongPacket} from './PongPacket';
import {Packet} from './Packet';
import {GameTypePacket} from './GameTypePacket';
import {RequestStringPacket} from './RequestStringPacket';
import {ResponseStringPacket} from './ResponseStringPacket';
import {RequestChoicePacket} from './RequestChoicePacket';
import {ResponseChoicePacket} from './ResponseChoicePacket';

export function stringToPacket(packet: string): Packet | null {
  var data = packet.split('|');
  var packetId = data[0];
  data = data.slice(1);
  try {
    switch (packetId) {
      case "Host":
        return new HostPacket(Number.parseFloat(data[0]), Number.parseFloat(data[1]));
      case "Player":
        return new PlayerPacket(Number.parseFloat(data[0]), Number.parseFloat(data[1]), data[2]);
      case "RequestNumber":
        return new RequestNumberPacket(Number.parseFloat(data[0]), data[1], Number.parseFloat(data[2]), Number.parseFloat(data[3]))
      case "ReturnNumber":
        return new ResponseNumberPacket(Number.parseFloat(data[0]), data[1], Number.parseFloat(data[2]));
      case "RequestString":
        return new RequestStringPacket(Number.parseFloat(data[0]), data[1], Number.parseFloat(data[2]))
      case "ReturnString":
        return new ResponseStringPacket(Number.parseFloat(data[0]), data[1], data[2]);
      case "RequestChoice":
        return new RequestChoicePacket(Number.parseFloat(data[0]), data[1], data[2].split("¥"))
      case "ReturnChoice":
        return new ResponseChoicePacket(Number.parseFloat(data[0]), data[1], Number.parseFloat(data[2]));
      case "Ping":
        return new PingPacket();
      case "Pong":
        return new PongPacket();
      case "GameType":
        return new GameTypePacket(Number.parseFloat(data[0]), data[1]);
      default:
        return null;
    }
  } catch (e) {
    return null;
  }
}
