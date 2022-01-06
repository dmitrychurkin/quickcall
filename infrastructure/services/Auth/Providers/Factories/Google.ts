import GoogleProvider from "next-auth/providers/google";
import InvalidEnvVariableException from "@/infrastructure/exceptions/InvalidEnvVariableException";
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from "../Config";
import type IProviderFactory from "./IProviderFactory";

const ProviderFactory: IProviderFactory = () => {
    if (!GOOGLE_CLIENT_ID) {
        throw new InvalidEnvVariableException('GOOGLE_CLIENT_ID');
    }

    if (!GOOGLE_CLIENT_SECRET) {
        throw new InvalidEnvVariableException('GOOGLE_CLIENT_SECRET');
    }

    return GoogleProvider({
        clientId: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET
    });
};

export default ProviderFactory;
