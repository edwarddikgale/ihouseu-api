import mongoose, { Document } from 'mongoose';
import {IInteractQueue} from '../IInteractQueue';

const Schema = mongoose.Schema;
const IInteractQueueSchema = new Schema<IInteractQueue>({
  engageMax: {
    type: Number,
    default: 10
  },
  engageMin: {
    type: Number,
    default: 0
  },
  iHouseuPostOwner: {
    type: String,
    required: true
  },
  iHouseuPostOwnerPwd: {
    type: String,
    required: true
  },
  iHouseuPostUrl: {
    type: String,
    required: true
  },
  mode: {
    type: String,
    required: true
  },
  raw: {
    type: String,
    required: true
  },
  socialPostUrl: {
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

export default mongoose.model<IInteractQueue>('InteractQueue', IInteractQueueSchema);
