import {CustomApiError} from '../errors/custom-error';

const errorHandlerMiddleware = (error:any, req: any, res: any, next: any) =>{
    console.log(`Error handler middleware called`);
    if(error instanceof CustomApiError){
        return res.status(error.statusCode).json({message: error.message});
    }
    return res.status(500).json({message:`Something went pear shaped, oh oh... `});
}

export default errorHandlerMiddleware;