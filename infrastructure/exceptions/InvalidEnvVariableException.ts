export default class InvalidEnvVariableException extends Error {
    constructor(variableName: string) {
        super(`${variableName} should be specified`);
        this.name = 'InvalidEnvVariableException';
    }
}