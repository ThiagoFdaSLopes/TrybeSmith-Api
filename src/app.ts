import express from 'express';
import productRouter from './routes/products.router';
import userRouter from './routes/user.router';

const app = express();

app.use(express.json());
app.use('/products', productRouter);
app.use('/users', userRouter);

// Iniciando Projeto

export default app;
