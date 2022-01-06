import type IProviderFactory from './IProviderFactory';
import type User from '@/core/aggregates/UserAggregate/User';
import type IUserRepository from '@/core/aggregates/UserAggregate/IUserRepository';
import CredentialsProvider from 'next-auth/providers/credentials';
import UserRepository from '@/infrastructure/repositories/UserRepository';

type AwaitableUser = (Omit<User, "id"> | { id?: string; }) | null;

const CredentialsFactory: IProviderFactory<User> = (repository = UserRepository) =>
    CredentialsProvider({
        credentials: {
            email: {},
            password: {}
        },
        async authorize(credentials) {
            console.log('authorize credentials => ', credentials);
            let user: AwaitableUser = null;
            // if (credentials) {
            //     user = await (repository as IUserRepository).getAuthorizedUser(credentials)
            //         .catch(err => {
            //             console.error(err);
            //             return null;
            //         });
            // }
            return user;
        }
    });

export default CredentialsFactory;
