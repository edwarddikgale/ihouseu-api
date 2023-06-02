import mongoose, { Document } from 'mongoose';
import { IPostLog } from '../IPostLog';

const postLogSchema = new mongoose.Schema<IPostLog>({
  socialPostUrl: {
    type: String,
    required: true,
  },
  objectId: {
    type: String,
    required: true,
  },
  ownerId: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    required: true,
  },
  updated: {
    type: Date,
    required: true,
  },
});

export default mongoose.model<IPostLog>('PostLogs', postLogSchema);
