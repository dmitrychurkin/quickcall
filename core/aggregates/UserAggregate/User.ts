import IAggregateRoot from "../IAggregateRoot";

export default interface User extends IAggregateRoot {
    readonly email: string;
    readonly hash?: string;
    readonly salt?: string;
    readonly firstName?: string;
    readonly lastName?: string;
    readonly name?: string;
    readonly image?: string;
};
