import { Request, Response } from 'express';
import OrderService from '../services/orderService';

export default class OrderController {
  constructor(private orderService = new OrderService()) {}

  getAllOrders = async (req: Request, res: Response) => {
    try {
      const result = await this.orderService.getAllOrders();
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  };
}