import express from 'express';
import ProductController from '../controllers/productsController';

const productController = new ProductController();

const router = express.Router();

router.post('/', productController.createProduct);

export default router;