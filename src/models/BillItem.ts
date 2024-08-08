import mongoose, { Document, Schema } from 'mongoose';

export interface IBillItem extends Document {
  billId: mongoose.Types.ObjectId;
  itemId: mongoose.Types.ObjectId;
  quantity: number;
  subtotal: number;
}

const billItemSchema: Schema = new Schema({
  billId: { type: Schema.Types.ObjectId, ref: 'Bill', required: true },
  itemId: { type: Schema.Types.ObjectId, ref: 'Item', required: true },
  quantity: { type: Number, required: true },
  subtotal: { type: Number, required: true },
});

export default mongoose.model<IBillItem>('BillItem', billItemSchema);

