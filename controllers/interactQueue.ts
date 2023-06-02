import InteractQueues from '../models/Schema/InteractQueue';
import {asyncWrapper} from '../middleware/async';
import {createCustomeApiError} from '../errors/custom-error';

const recordName = 'InteractQueue';

const getAllInteractQueues = asyncWrapper(
    async (req: any, res:any) =>{

        const records = await InteractQueues.find();
        if(!records) throw Error(`No ${recordName}s found!`);
        res.status(200).json({records});
    }
);

const getInteractQueue = asyncWrapper(async(req:any, res: any, next: any) => {
        const {id: recordId} = req.params;
        const record = await InteractQueues.findOne({_id: recordId});
        if(!record){
            return next(createCustomeApiError(`An ${recordName} with this id: ${recordId}  has not been found`, 404));
        }
        res.status(200).json({record});
})

const createInteractQueue = asyncWrapper(async(req:any, res: any, next: any) => {
    const newRecord = new InteractQueues(req.body);
    const record = await newRecord.save();
    if(!record) {
        return next(createCustomeApiError(`Could not create a new ${recordName}`, 404));
    }
    res.status(200).json(record);
})

const deleteInteractQueue = asyncWrapper(async(req:any, res: any) => {
    const record = await InteractQueues.findByIdAndDelete(req.params.id);
    if(!record) throw Error(`No ${recordName} with id ${req.params.id} was found!`);
    res.status(200).json({success: true});
})

const updateInteractQueue = asyncWrapper(async(req:any, res: any) => {
    const record = await InteractQueues.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
    if(!record) throw Error(`An error occured while updating this ${recordName} ${req.params.id}`);
    res.status(200).json(record);
})


export {getAllInteractQueues, getInteractQueue, createInteractQueue, updateInteractQueue, deleteInteractQueue};