import { randomBytes, pbkdf2 } from 'crypto';
import { promisify } from 'util';
import User from '@/core/aggregates/UserAggregate/User';
import {
    PASSWORD_PBKDF2_DIGEST,
    PASSWORD_PBKDF2_ITERATIONS,
    PASSWORD_PBKDF2_KEYLEN,
    PASSWORD_SALT_ENCODING,
    PASSWORD_SALT_LENGTH
} from './Config';

const pbkdf2Promisified = promisify(pbkdf2);

export default class UserClass implements User {
    public readonly email!: string;
    public readonly firstName!: string;
    public readonly lastName!: string;
    public readonly name!: string;
    public readonly image!: string;
    public salt!: string;
    public hash!: string;

    public async setPassword(password: string): Promise<void> {
        const salt = this.salt = randomBytes(PASSWORD_SALT_LENGTH)
            .toString(PASSWORD_SALT_ENCODING);

        this.hash = await this._getHash(password, salt);
    }

    public async validatePassword(password: string): Promise<boolean> {
        const hash = await this._getHash(password, this.salt);

        return this.hash === hash;
    }

    private async _getHash(password: string, salt: string): Promise<string> {
        const buffer = await pbkdf2Promisified(
            password,
            salt,
            PASSWORD_PBKDF2_ITERATIONS,
            PASSWORD_PBKDF2_KEYLEN,
            PASSWORD_PBKDF2_DIGEST
        );

        return buffer.toString(PASSWORD_SALT_ENCODING);
    }
}
