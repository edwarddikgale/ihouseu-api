import mongoose, { Document } from 'mongoose';
import { IComment } from '../IComment';

const Schema = mongoose.Schema;
const ICommentSchema = new Schema<IComment>({
  text: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  objectId: {
    type: String,
    required: true
  },
  ownerId: {
    type: String,
    required: true
  },
  created: {
    type: Date
  },
  updated: {
    type: Date
  }
});

export default mongoose.model<IComment>('Comments', ICommentSchema);
