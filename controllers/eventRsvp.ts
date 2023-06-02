import EventRsvps from '../models/Schema/EventRsvp';
import {asyncWrapper} from '../middleware/async';
import {createCustomeApiError} from '../errors/custom-error';

const recordName = 'EventRsvp';

const getAllEventRsvps = asyncWrapper(
    async (req: any, res:any) =>{

        const records = await EventRsvps.find();
        if(!records) throw Error(`No ${recordName}s found!`);
        res.status(200).json({records});
    }
);

const getEventRsvp = asyncWrapper(async(req:any, res: any, next: any) => {
        const {id: recordId} = req.params;
        const record = await EventRsvps.findOne({_id: recordId});
        if(!record){
            return next(createCustomeApiError(`An ${recordName} with this id: ${recordId}  has not been found`, 404));
        }
        res.status(200).json({record});
})

const createEventRsvp = asyncWrapper(async(req:any, res: any, next: any) => {
    const newRecord = new EventRsvps(req.body);
    const record = await newRecord.save();
    if(!record) {
        return next(createCustomeApiError(`Could not create a new ${recordName}`, 404));
    }
    res.status(200).json(record);
})

const deleteEventRsvp = asyncWrapper(async(req:any, res: any) => {
    const record = await EventRsvps.findByIdAndDelete(req.params.id);
    if(!record) throw Error(`No ${recordName} with id ${req.params.id} was found!`);
    res.status(200).json({success: true});
})

const updateEventRsvp = asyncWrapper(async(req:any, res: any) => {
    const record = await EventRsvps.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
    if(!record) throw Error(`An error occured while updating this ${recordName} ${req.params.id}`);
    res.status(200).json(record);
})


export {getAllEventRsvps, getEventRsvp, createEventRsvp, updateEventRsvp, deleteEventRsvp};