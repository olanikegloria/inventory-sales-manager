import mongoose, { Document, Schema } from 'mongoose';

export interface IBill extends Document {
  date: Date;
  totalAmount: number;
}

const billSchema: Schema = new Schema({
  date: { type: Date, default: Date.now },
  totalAmount: { type: Number, required: true },
});

export default mongoose.model<IBill>('Bill', billSchema);
