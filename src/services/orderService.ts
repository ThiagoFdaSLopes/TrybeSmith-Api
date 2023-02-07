import connection from '../models/connection';
import OrderModel from '../models/orderModel';

export default class OrderService {
  orderModel: OrderModel;

  constructor() {
    this.orderModel = new OrderModel(connection);
  }

  async getAllOrders() {
    const result = await this.orderModel.getAllOrders();
    return result;
  }

  async createOrders(id: number, productsIds: number[]) {
    try { 
      const result = await this.orderModel.createOrders(id, productsIds);
      return result;
    } catch (error) {
      return error;
    }
  }
}