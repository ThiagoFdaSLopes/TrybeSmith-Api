import { Response, Request } from 'express';
import ProductService from '../services/productService';

export default class ProductController {
  constructor(private productService = new ProductService()) { }

  createProduct = async (req: Request, res: Response) => {
    try {
      const { message } = await this.productService.createProduct(req.body);
      res.status(201).json(message);
    } catch (error) {
      res.status(500).json(error);
    }
  };

  getAllProducts = async (req: Request, res: Response) => {
    try {
      const { message } = await this.productService.getAllProducts();
      return res.status(200).json(message);
    } catch (error) {
      res.status(500).json(error);
    }
  };
}