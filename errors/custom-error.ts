class CustomApiError extends Error{
    statusCode:number;

    constructor(message: string, statusCode: number){
        super(message);
        this.statusCode = statusCode;
    }
}

const createCustomeApiError = (message:string, code: number) =>{
    return new CustomApiError(message, code);
}

export {CustomApiError, createCustomeApiError};