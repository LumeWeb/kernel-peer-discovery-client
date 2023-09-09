import { Client, factory } from "@lumeweb/libkernel/module";
import type { Peer } from "@lumeweb/libpeerdiscovery";
import { hexToBytes } from "@lumeweb/libweb";

const MODULE = "zdiLW9MtAAMssP5vLBgd1FitouiVXzNUYZszFYG44uVKqCPDqUQox9aq1y";

export class PeerDiscoveryClient extends Client {
  public async register(source: string): Promise<void> {
    const bag = this.getBound(source);
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
      pubkey = hexToBytes(pubkey);
    }

    return await this.callModuleReturn("discover", { pubkey });
  }
}

export const createClient = factory<PeerDiscoveryClient>(
  PeerDiscoveryClient,
  MODULE,
);

export { Peer };
