import NextAuth from "next-auth";
import adapter from './Adapter';
import providers from './Providers';
import { NEXTAUTH_SECRET } from './Config';

export default NextAuth({
    pages: {
        signIn: '/auth/signin'
    },
    secret: NEXTAUTH_SECRET,
    adapter,
    providers
});
