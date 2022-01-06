import type { Adapter } from "next-auth/adapters";

export default interface IAdapterFactory {
    (): Adapter;
}
