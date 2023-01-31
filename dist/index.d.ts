import { Client } from "@lumeweb/libkernel-universal";
import type { Peer } from "@lumeweb/peer-discovery";
export declare class PeerDiscoveryClient extends Client {
    register(source: string): Promise<void>;
    remove(name: string): Promise<boolean>;
    removeAll(): Promise<void>;
    exists(name: string): Promise<boolean>;
    discover(pubkey: string | Uint8Array): Promise<Peer | boolean>;
}
export declare const createClient: (...args: any) => PeerDiscoveryClient;
export { Peer };
//# sourceMappingURL=index.d.ts.map