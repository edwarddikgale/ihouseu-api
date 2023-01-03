const asyncWrapper = (callBack: any) => {
    return async(req: any, res: any, next: any) =>{
        try{
            await callBack(req, res, next)
        }
        catch(error){
            next(error);
        }
    }
}

export {asyncWrapper};