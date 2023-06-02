import PostLogs from '../models/Schema/PostLog';
import {asyncWrapper} from '../middleware/async';
import {createCustomeApiError} from '../errors/custom-error';

const recordName = 'PostLog';

const getAllPostLogs = asyncWrapper(
    async (req: any, res:any) =>{

        const records = await PostLogs.find();
        if(!records) throw Error(`No ${recordName}s found!`);
        res.status(200).json({records});
    }
);

const getPostLog = asyncWrapper(async(req:any, res: any, next: any) => {
        const {id: recordId} = req.params;
        const record = await PostLogs.findOne({_id: recordId});
        if(!record){
            return next(createCustomeApiError(`An ${recordName} with this id: ${recordId}  has not been found`, 404));
        }
        res.status(200).json({record});
})

const createPostLog = asyncWrapper(async(req:any, res: any, next: any) => {
    const newRecord = new PostLogs(req.body);
    const record = await newRecord.save();
    if(!record) {
        return next(createCustomeApiError(`Could not create a new ${recordName}`, 404));
    }
    res.status(200).json(record);
})

const deletePostLog = asyncWrapper(async(req:any, res: any) => {
    const record = await PostLogs.findByIdAndDelete(req.params.id);
    if(!record) throw Error(`No ${recordName} with id ${req.params.id} was found!`);
    res.status(200).json({success: true});
})

const updatePostLog = asyncWrapper(async(req:any, res: any) => {
    const record = await PostLogs.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
    if(!record) throw Error(`An error occured while updating this ${recordName} ${req.params.id}`);
    res.status(200).json(record);
})


export {getAllPostLogs, getPostLog, createPostLog, updatePostLog, deletePostLog};