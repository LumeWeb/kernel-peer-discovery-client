import { Client, factory } from "@lumeweb/libkernel-universal";
import type { Peer } from "@lumeweb/peer-discovery";
import { hexToBuf } from "@siaweb/libweb/dist";
export class PeerDiscoveryClient extends Client {
  public async register(source: string): Promise<void> {
    const bag = await this.loadBound(source);
    const ret = await bag.callModule("register");
    this.handleError(ret);
  }

  public async registerSelf(): Promise<void> {
    return await this.callModuleReturn("register");
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
  public async discover(pubkey: string | Uint8Array): Promise<Peer | boolean> {
    if (typeof pubkey === "string") {
      let buf = hexToBuf(pubkey);
      if (buf[1]) {
        throw new Error(buf[1]);
      }

      pubkey = buf[0];
    }
    return await this.callModuleReturn("discover", { pubkey });
  }
}

export const createClient = factory<PeerDiscoveryClient>(
  PeerDiscoveryClient,
  "FADtZWz_dUhGRgLcaJGIdTgYPg4k60F8wvKgby_v08jo3A"
);

export { Peer };
