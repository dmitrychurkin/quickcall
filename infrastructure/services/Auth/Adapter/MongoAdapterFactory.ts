import type IAdapterFactory from "./IAdapterFactory";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import { getClient } from "@/infrastructure/database";

const MongoAdapterFactory: IAdapterFactory = () =>
    MongoDBAdapter(getClient());

export default MongoAdapterFactory;
