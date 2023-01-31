import { Client, factory } from "@lumeweb/libkernel-universal";
export class PeerDiscoveryClient extends Client {
    async register(source) {
        const bag = await this.loadBound(source);
        const ret = await bag.callModule("register");
        this.handleError(ret);
    }
    async remove(name) {
        return await this.callModuleReturn("remove", { name });
    }
    async removeAll() {
        await this.callModuleReturn("removeAll");
    }
    async exists(name) {
        return await this.callModuleReturn("remove", { name });
    }
    async discover(pubkey) {
        return await this.callModuleReturn("discover", { pubkey });
    }
}
export const createClient = factory(PeerDiscoveryClient, "FACTQhR-sNQ0K9Nh5QlHlkp5q57rxBdc2DGgacoTdwtIoA");
