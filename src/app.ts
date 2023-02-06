import express from 'express';
import productRouter from './routes/products.router';

const app = express();

app.use(express.json());
app.use('/products', productRouter);

// Iniciando Projeto

export default app;
