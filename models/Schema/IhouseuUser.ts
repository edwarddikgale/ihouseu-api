import mongoose, { Document } from 'mongoose';
import { IhouseuUser } from '../IIhouseuUser';

const Schema = mongoose.Schema;
const IhouseuUserSchema = new Schema<IhouseuUser>({
  email: {
    type: String,
    trim: true,
    required: true
  },
  firstname: {
    type: String,
    trim: true,
    required: true
  },
  fullname: {
    type: String,
    trim: true,
    required: true
  },
  lastname: {
    type: String,
    trim: true,
    required: true
  },
  mode: {
    type: String,
    trim: true
  },
  password: {
    type: String,
    trim: true,
    required: true
  },
  registered: {
    type: Boolean,
    default: false
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

export default mongoose.model<IhouseuUser>('IhouseuUsers', IhouseuUserSchema);
