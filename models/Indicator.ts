import mongoose from 'mongoose';
import {IIndicator} from './IIndicator';

const Schema  = mongoose.Schema;
const IndicatorSchema = new Schema<IIndicator>({
    title:{
        type: String,
        trim: true,
        required: true
    },
    description:{
        type: String,
        trim: true,
        required: true 
    },
    createdOn:{
        type: Date,
        default: Date.now
    },
    lastUpdatedOn:{
        type: Date,
        default: Date.now
    }    
});

export default mongoose.model('Indicators', IndicatorSchema);