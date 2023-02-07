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

  createOrder = async (req: Request, res: Response) => {
    const { id } = req.body.user.body;
    const { productsIds } = req.body;

    try {
      await this.orderService.createOrders(id, productsIds);
      const retorno = { userId: id, productsIds };
      res.status(201).json(retorno);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  };
}