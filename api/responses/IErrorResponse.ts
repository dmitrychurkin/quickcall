import IResponse from "./IResponse";

export default interface IErrorResponse extends IResponse {
    readonly message: string;
}
