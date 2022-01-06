import { NextApiResponse } from "next";
import IResponse from "./IResponse";

export default function ResponseSender<T extends IResponse>(res: NextApiResponse<T>, body: T) {
    return process.env.NODE_ENV === 'production' ? res.end() : res.json(body);
}
