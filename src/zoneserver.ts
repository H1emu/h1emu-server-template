import { ZoneServer2016 } from "h1z1-server";

class ExampleZoneServer extends ZoneServer2016 {
  constructor(
    serverPort: number,
    gatewayKey: Uint8Array,
    mongoAddress?: string,
    worldId?: number
  ) {
    super(serverPort, gatewayKey, mongoAddress, worldId);
  }
}
const server = new ExampleZoneServer(
  1117,
  Buffer.from("F70IaxuU8C/w7FPXY1ibXw==", "base64"),
  process.env.MONGO_URL,
  Number(process.env.WORLD_ID)
);

server.start();
