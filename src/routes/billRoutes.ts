import express, { Request, Response } from 'express';
import Joi from 'joi';
import Bill, { IBill } from '../models/Bill';
import BillItem, { IBillItem } from '../models/BillItem';
import Item, { IItem } from '../models/Item';

const router = express.Router();

const billSchema = Joi.object({
  items: Joi.array()
    .items(
      Joi.object({
        itemId: Joi.string().required(),
        quantity: Joi.number().required(),
      })
    )
    .required(),
});


router.post('/', async (req: Request, res: Response) => {
  const { error } = billSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const { items } = req.body;

  try {
    let totalAmount = 0;
    const billItems: Partial<IBillItem>[] = [];

    for (const { itemId, quantity } of items) {
      const item = await Item.findById(itemId);
      if (!item || item.quantity < quantity) {
        return res.status(400).json({ message: 'Invalid item or insufficient quantity' });
      }

      const subtotal = item.price * quantity;
      totalAmount += subtotal;
      billItems.push({ itemId, quantity, subtotal });

    
      item.quantity -= quantity;
      await item.save();
    }

    const bill: IBill = new Bill({ totalAmount });
    await bill.save();

    for (const billItem of billItems) {
      const newBillItem: IBillItem = new BillItem({ billId: bill._id, ...billItem });
      await newBillItem.save();
    }

    res.status(201).json({ bill, billItems });
  } catch (err) {
    res.status(500).json({ message: 'Error creating bill', error: err });
  }
});

router.get('/', async (_req: Request, res: Response) => {
  try {
    const bills = await Bill.find();
    res.json(bills);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving bills', error: err });
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const bill = await Bill.findById(id);
    if (!bill) {
      return res.status(404).json({ message: 'Bill not found' });
    }

    const billItems = await BillItem.find({ billId: id }).populate('itemId');
    res.json({ bill, billItems });
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving bill details', error: err });
  }
});

export default router;
