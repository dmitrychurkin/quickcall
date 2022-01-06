import UserCredentialsDto from "@/core/dtos/UserCredentialsDto";
import User from "./User";

export default interface IUserQueries {
    findUserByEmail(email: string): Promise<User | null>;
    getAuthorizedUser(credentials: UserCredentialsDto): Promise<User | null>;
}
