import type { HydratedDocument } from "mongoose";
import User from "@/core/aggregates/UserAggregate/User";
import IUserRepository from "@/core/aggregates/UserAggregate/IUserRepository";
import CreateUserDto from "@/core/dtos/CreateUserDto";
import UserCredentialsDto from "@/core/dtos/UserCredentialsDto";
import UserModel, { UserClass } from "../models/User";
import db from "../database";

const UserRepository: IUserRepository = {
    async findUserByEmail(email: string): Promise<User | null> {
        await db();
        const userDocument: HydratedDocument<UserClass> = await UserModel.findOne({ email }, 'email name image firstName lastName').exec();
        if (userDocument) {
            return getUserFromDocument(userDocument);
        }
        return null;
    },

    async createUser(newUser: CreateUserDto) {
        await db();
        const user = new UserModel(newUser);
        return user.save();
    },

    async getAuthorizedUser(credentials: UserCredentialsDto): Promise<User | null> {
        await db();
        const userDocument: HydratedDocument<UserClass> = await UserModel.findOne({ email: credentials.email }).exec();
        if (userDocument && (await userDocument.validatePassword(credentials.password))) {
            return getUserFromDocument(userDocument);
        }
        return null;
    }
};

function getUserFromDocument(userDocument: HydratedDocument<UserClass>): User {
    const { email, name, image, firstName, lastName } = userDocument;
    const user: User = {
        email,
        name,
        image,
        firstName,
        lastName
    };
    return user;
}

export const {
    findUserByEmail,
    createUser,
    getAuthorizedUser
} = UserRepository;

export default UserRepository;
