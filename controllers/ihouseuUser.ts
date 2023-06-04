import IhouseuUsers from '../models/Schema/IhouseuUser';
import {asyncWrapper} from '../middleware/async';
import {createCustomeApiError} from '../errors/custom-error';

const recordName = 'IhouseuUser';

const getAllIhouseuUsers = asyncWrapper(
    async (req: any, res:any) =>{

        const records = await IhouseuUsers.find();
        if(!records) throw Error(`No ${recordName}s found!`);
        res.status(200).json({records});
    }
);

const countIhouseuUsers = asyncWrapper(
    async (req: any, res: any) =>{
        const allCount = await IhouseuUsers.countDocuments();
        const allNotRegistered = await IhouseuUsers.countDocuments({registered: false})
       
        res.status(200).json({all: allCount, notRegistered: allNotRegistered});
    }
)

const getIhouseuUser = asyncWrapper(async(req:any, res: any, next: any) => {
        const {id: recordId} = req.params;
        const record = await IhouseuUsers.findOne({_id: recordId});
        if(!record){
            return next(createCustomeApiError(`An ${recordName} with this id: ${recordId}  has not been found`, 404));
        }
        res.status(200).json({record});
})

const createIhouseuUser = asyncWrapper(async(req:any, res: any, next: any) => {
    const newRecord = new IhouseuUsers(req.body);
    const record = await newRecord.save();
    if(!record) {
        return next(createCustomeApiError(`Could not create a new ${recordName}`, 404));
    }
    res.status(200).json(record);
})

const deleteIhouseuUser = asyncWrapper(async(req:any, res: any) => {
    const record = await IhouseuUsers.findByIdAndDelete(req.params.id);
    if(!record) throw Error(`No ${recordName} with id ${req.params.id} was found!`);
    res.status(200).json({success: true});
})

const updateIhouseuUser = asyncWrapper(async(req:any, res: any) => {
    const record = await IhouseuUsers.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
    if(!record) throw Error(`An error occured while updating this ${recordName} ${req.params.id}`);
    res.status(200).json(record);
})


export {getAllIhouseuUsers, getIhouseuUser, createIhouseuUser, updateIhouseuUser, deleteIhouseuUser, countIhouseuUsers};