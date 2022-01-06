import type { Provider } from "next-auth/providers";
import CredentialsFactory from "./Factories/Credentials";

const providers: Array<Provider> = [
    CredentialsFactory()
];

export default providers;
