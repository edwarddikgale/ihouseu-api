import SocialAccounts from '../models/Schema/SocialAccount';
import {asyncWrapper} from '../middleware/async';
import {createCustomeApiError} from '../errors/custom-error';

const recordName = 'SocialAccount';

const getAllSocialAccounts = asyncWrapper(
    async (req: any, res:any) =>{

        const records = await SocialAccounts.find();
        if(!records) throw Error(`No ${recordName}s found!`);
        res.status(200).json({records});
    }
);

const getSocialAccount = asyncWrapper(async(req:any, res: any, next: any) => {
        const {id: recordId} = req.params;
        const record = await SocialAccounts.findOne({_id: recordId});
        if(!record){
            return next(createCustomeApiError(`An ${recordName} with this id: ${recordId}  has not been found`, 404));
        }
        res.status(200).json({record});
})

const createSocialAccount = asyncWrapper(async(req:any, res: any, next: any) => {
    const newRecord = new SocialAccounts(req.body);
    const record = await newRecord.save();
    if(!record) {
        return next(createCustomeApiError(`Could not create a new ${recordName}`, 404));
    }
    res.status(200).json(record);
})

const deleteSocialAccount = asyncWrapper(async(req:any, res: any) => {
    const record = await SocialAccounts.findByIdAndDelete(req.params.id);
    if(!record) throw Error(`No ${recordName} with id ${req.params.id} was found!`);
    res.status(200).json({success: true});
})

const updateSocialAccount = asyncWrapper(async(req:any, res: any) => {
    const record = await SocialAccounts.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
    if(!record) throw Error(`An error occured while updating this ${recordName} ${req.params.id}`);
    res.status(200).json(record);
})


export {getAllSocialAccounts, getSocialAccount, createSocialAccount, updateSocialAccount, deleteSocialAccount};