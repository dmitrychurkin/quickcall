import type { Mongoose } from "mongoose";
import { connect } from 'mongoose';
import InvalidEnvVariableException from "../exceptions/InvalidEnvVariableException";
import { DB_CONNECTION_URI } from "./Config";

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 * https://github.com/vercel/next.js/blob/canary/examples/with-mongodb-mongoose/lib/dbConnect.js
 */
const db: () => Promise<Mongoose> = async () => {
    let connection: Mongoose = globalThis._mongoose;
    if (connection) {
        console.info('Successfully reusing connection');
        return connection;
    }

    if (!DB_CONNECTION_URI) {
        throw new InvalidEnvVariableException('DB_CONNECTION_URI');
    }

    connection = globalThis._mongoose = await connect(DB_CONNECTION_URI, { bufferCommands: false });

    console.info('Successfully connected to database');

    return connection;
};

export const getClient = () => db().then(({ connection }) => connection.getClient());

export default db;

declare global {
    var _mongoose: Mongoose;
}
