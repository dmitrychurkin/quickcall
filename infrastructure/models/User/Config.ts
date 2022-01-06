export const PASSWORD_SALT_LENGTH = Number(process.env.PASSWORD_SALT_LENGTH) || 10;
export const PASSWORD_SALT_ENCODING: BufferEncoding = process.env.PASSWORD_SALT_ENCODING as BufferEncoding || 'hex';
export const PASSWORD_PBKDF2_ITERATIONS = Number(process.env.PASSWORD_PBKDF2_ITERATIONS) || 1000;
export const PASSWORD_PBKDF2_KEYLEN = Number(process.env.PASSWORD_PBKDF2_KEYLEN) || 64;
export const PASSWORD_PBKDF2_DIGEST = process.env.PASSWORD_PBKDF2_DIGEST || 'sha512';
