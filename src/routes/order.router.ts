import express from 'express';
import OrderController from '../controllers/orderController';
import validateToken from '../middlewares/validateToken';
import validateProductsIds from '../middlewares/validateProductsIds';

const orderController = new OrderController();

const router = express.Router();

router.post('/', validateToken, validateProductsIds, orderController.createOrder);
router.get('/', orderController.getAllOrders);

export default router;