import mongoose from 'mongoose';

const Schema  = mongoose.Schema;
const PostSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true 
    },
    date:{
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Posts', PostSchema);