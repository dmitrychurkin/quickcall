import type { NextApiRequest, NextApiResponse } from "next";
import IResponse from "../responses/IResponse";
import { RequestMethods, RequestStrategies } from "./IController";
import sender from '../responses/ResponseSender';
import IErrorResponse from "../responses/IErrorResponse";

export default function Controller<T extends IResponse>(requestStrategies: RequestStrategies<T>) {
    return async (req: NextApiRequest, res: NextApiResponse<IResponse>) => {
        const strategyMethod = req.method as RequestMethods;

        if (requestStrategies.has(strategyMethod)) {
            return (await requestStrategies.get(strategyMethod)!(req, res)
                .catch((err: Error) => {
                    const unhandledResponseBody: IErrorResponse = {
                        message: `${err.name}: ${err.message}`
                    };
                    return sender<IErrorResponse>(res.status(500), unhandledResponseBody);
                })
            );
        }

        const unknownMethodResponseBody: IErrorResponse = {
            message: `Method ${strategyMethod} require implementation`
        };

        sender<IErrorResponse>(res.status(500), unknownMethodResponseBody);
    };
}
