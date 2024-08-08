import express from 'express';
import { createBill, getBills, getBillDetails } from '../controllers/billController';

const router = express.Router();

router.post('/', createBill);
router.get('/', getBills);
router.get('/:id', getBillDetails);

export default router;
