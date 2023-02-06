import express from 'express';
import OrderController from '../controllers/orderController';

const orderController = new OrderController();

const router = express.Router();

router.get('/', orderController.getAllOrders);

export default router;