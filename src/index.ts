import { Client, factory } from "@lumeweb/libkernel-universal";
import type { Peer } from "@lumeweb/peer-discovery";
export class PeerDiscoveryClient extends Client {
  public async register(source: string): Promise<void> {
    const bag = await this.loadBound(source);
    const ret = await bag.callModule("register");
    this.handleError(ret);
  }

  public async remove(name: string): Promise<boolean> {
    return await this.callModuleReturn("remove", { name });
  }

  public async removeAll(): Promise<void> {
    await this.callModuleReturn("removeAll");
  }

  public async exists(name: string): Promise<boolean> {
    return await this.callModuleReturn("remove", { name });
  }
  public async discover(pubkey: string): Promise<Peer | boolean> {
    return await this.callModuleReturn("discover", { pubkey });
  }
}

export const createClient = factory<PeerDiscoveryClient>(
  PeerDiscoveryClient,
  "FACTQhR-sNQ0K9Nh5QlHlkp5q57rxBdc2DGgacoTdwtIoA"
);

export { Peer };
