import mongoose from 'mongoose';
import {IStg} from './IStg';

const Schema  = mongoose.Schema;
const StgSchema = new Schema<IStg>({
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

export default mongoose.model('Stgs', StgSchema);