import express from 'express';
import ProductController from '../controllers/productsController';
import validateName from '../middlewares/ValidateName';
import validateAmount from '../middlewares/validateAmount';

const productController = new ProductController();

const router = express.Router();

router.post(
  '/',
  validateName,
  validateAmount,
  productController.createProduct,
);
router.get('/', productController.getAllProducts);

export default router;