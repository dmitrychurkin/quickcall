import type { NextApiRequest, NextApiResponse } from "next";

export const enum RequestMethods {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
    PATCH = 'PATCH'
};

export type RequestHandler<D> = (req: NextApiRequest, res: NextApiResponse<D>) => Promise<void>;

export type RequestStrategies<D> = Map<RequestMethods, RequestHandler<D>>;

export default interface IController<T> {
    (requestStrategies: RequestStrategies<T>): void;
}
