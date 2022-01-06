import type { NextApiRequest, NextApiResponse } from "next";
import { findUserByEmail, createUser } from "@/infrastructure/repositories/UserRepository";
import CreateUserDto from "../../core/dtos/CreateUserDto";
import { RequestHandler, RequestMethods } from "./IController";
import IResponse from "../responses/IResponse";
import Controller from "./Controller";

const ResquestStrategires = new Map<RequestMethods, RequestHandler<IResponse>>()
    .set(RequestMethods.GET, async (req: NextApiRequest, res: NextApiResponse) => {
        const { email } = req.query;
        if (typeof email === 'string') {
            const user = await findUserByEmail(email);
            console.log('user => ', user);
            return res.json(user);
        }
        return res.status(500).json({ error: true });
    })
    .set(RequestMethods.POST, async (req: NextApiRequest, res: NextApiResponse) => {
        const { email } = req.body;
        if (email) {
            const createUserDto: CreateUserDto = {
                email
            };

            const response = await createUser(createUserDto);

            return res.json(response);
        }
        return res.status(500).json({ error: true });
    });

const UserController = Controller(ResquestStrategires);

export default UserController;
