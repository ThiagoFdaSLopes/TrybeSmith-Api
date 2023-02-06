import express from 'express';
import productRouter from './routes/products.router';
import userRouter from './routes/user.router';
import orderRouter from './routes/order.router';
import loginRouter from './routes/loginRouter';

const app = express();

app.use(express.json());
app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/orders', orderRouter);
app.use('/login', loginRouter);

// Iniciando Projeto

export default app;
