import mongoose, { Document } from 'mongoose';
import { IEventRsvp } from '../IEventRsvp';

const Schema = mongoose.Schema;
const IEventRsvpSchema = new Schema<IEventRsvp>({
  ihouseueventurl: {
    type: String,
    required: true
  },
  max: {
    type: Number,
    default: 10
  },
  min: {
    type: Number,
    default: 0
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

export default mongoose.model<IEventRsvp>('EventRsvps', IEventRsvpSchema);
