import mongoose from 'mongoose';
import {IPost} from './IPost';

const Schema  = mongoose.Schema;
const PostSchema = new Schema<IPost>({
    title:{
        type: String,
        trim: true,
        required: true
    },
    body:{
        type: String,
        trim: true,
        required: true 
    },
    date:{
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Posts', PostSchema);