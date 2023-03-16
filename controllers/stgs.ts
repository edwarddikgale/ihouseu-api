import Stgs from '../models/Stg';
import {asyncWrapper} from '../middleware/async';
import {createCustomeApiError} from '../errors/custom-error';

const recordName = 'stg';

const getAllStgs = asyncWrapper(
    async (req: any, res:any) =>{

        const records = await Stgs.find();
        if(!records) throw Error(`No ${recordName}s found!`);
        res.status(200).json({records});
    }
);

const getStg = asyncWrapper(async(req:any, res: any, next: any) => {
        const {id: recordId} = req.params;
        const record = await Stgs.findOne({_id: recordId});
        if(!record){
            return next(createCustomeApiError(`An ${recordName} with this id: ${recordId}  has not been found`, 404));
        }
        res.status(200).json({record});
})

const sortRated = asyncWrapper(async(req:any, res: any, next: any) => {
    console.log(req.body);
    const {list: stgRatedList} = req.body;
    

    const importanceWeight = 0.5;
    const controlWeight = 0.5;

    if(!stgRatedList){
        return next(createCustomeApiError(`Invalid or null list of stg rating list`, 404));
    }

    // Sort the array by importance, using the specified weights
    const sortedArray = stgRatedList.sort((a:any, b:any) => {
        const aScore = a.importanceLevel * importanceWeight + a.controlLevel * controlWeight;
        const bScore = b.importanceLevel * importanceWeight + b.controlLevel * controlWeight;
        return bScore - aScore; // Sort in descending order
    });

    res.status(200).json({sortedArray});
})

const createStg = asyncWrapper(async(req:any, res: any, next: any) => {
    const newRecord = new Stgs(req.body);
    const record = await newRecord.save();
    if(!record) {
        return next(createCustomeApiError(`Could not create a new ${recordName}`, 404));
    }
    res.status(200).json(record);
})

const deleteStg = asyncWrapper(async(req:any, res: any) => {
    const record = await Stgs.findByIdAndDelete(req.params.id);
    if(!record) throw Error(`No ${recordName} with id ${req.params.id} was found!`);
    res.status(200).json({success: true});
})

const updateStg = asyncWrapper(async(req:any, res: any) => {
    const record = await Stgs.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
    if(!record) throw Error(`An error occured while updating this ${recordName} ${req.params.id}`);
    res.status(200).json(record);
})


export {getAllStgs, getStg, createStg, updateStg, deleteStg, sortRated};