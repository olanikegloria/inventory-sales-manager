import express, { Request, Response } from 'express';
import Joi from 'joi';
import Item, { IItem } from '../models/Item';

const router = express.Router();

const itemSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  quantity: Joi.number().required(),
});

router.post('/', async (req: Request, res: Response) => {
  const { error } = itemSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const { name, price, quantity } = req.body;
  const item: IItem = new Item({ name, price, quantity });

  try {
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ message: 'Error adding item', error: err });
  }
});


router.get('/', async (_req: Request, res: Response) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving items', error: err });
  }
});

export default router;
