import express from 'express';
import connectDB from './config/database';
import itemRoutes from './routes/itemRoutes';
import billRoutes from './routes/billRoutes';

const app = express();

app.use(express.json()); 

connectDB();

app.use('/api/items', itemRoutes);
app.use('/api/bills', billRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
