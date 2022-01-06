import { Schema } from "mongoose";
import User from "@/core/aggregates/UserAggregate/User";

const UserSchema = new Schema<User>({
    lastName: {
        type: Schema.Types.String
    },
    firstName: {
        type: Schema.Types.String
    },
    name: {
        type: Schema.Types.String
    },
    email: {
        type: Schema.Types.String,
        unique: true
    },
    image: {
        type: Schema.Types.String
    },
    hash: Schema.Types.String,
    salt: Schema.Types.String
});

export default UserSchema;
