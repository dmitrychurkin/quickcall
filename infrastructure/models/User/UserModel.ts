import { models, model } from "mongoose";
import User from "@/core/aggregates/UserAggregate/User";
import UserSchema from "./UserSchema";
import UserClass from "./UserClass";


// HERE you can set up middlewares

export default models.User || model<User>('User', UserSchema.loadClass(UserClass));
