import User from "./User";
import CreateUserDto from '@/core/dtos/CreateUserDto';
import IRepository from "../IRepository";
import IUserQueries from "./IUserQueries";

export default interface IUserRepository extends IUserQueries, IRepository<User> {
    createUser(newUser: CreateUserDto): Promise<void>;
}
