import mongoose, { Document } from 'mongoose';
import { ISocialAccount } from '../ISocialAccount';

const Schema = mongoose.Schema;
const ISocialAccountSchema = new Schema<ISocialAccount>({
  engageMax: {
    type: Number,
    default: 10
  },
  engageMin: {
    type: Number,
    default: 0
  },
  iHouseuOwner: {
    type: String,
    required: true
  },
  iHouseuOwnerPwd: {
    type: String,
    required: true
  },
  socialSync: {
    type: Boolean,
    default: true
  },
  type: {
    type: String,
    default: "Instagram",
    required: false
  },
  url: {
    type: String,
    required: true
  },
  ownerId: {
    type: String,
    required: false
  },
  created: {
    type: Date
  },
  updated: {
    type: Date
  }
});

export default mongoose.model<ISocialAccount>('ISocialAccount', ISocialAccountSchema);
