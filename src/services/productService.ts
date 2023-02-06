import { IProductCreate } from '../interfaces';
import connection from '../models/connection';
import ProductModel from '../models/productModel';

export default class ProductService {
  productModel: ProductModel;

  constructor() {
    this.productModel = new ProductModel(connection);
  }

  async createProduct(body: IProductCreate) {
    try {
      const idProduct = await this.productModel.createProduct(body);
      return { message: { id: idProduct, ...body } };
    } catch (error) {
      return { message: 'Erro na hora de criar produto' };
    }
  }

  async getAllProducts() {
    try {
      const result = await this.productModel.getAllProducts();
      return { message: result };
    } catch (error) {
      return { message: 'Erro na hora de pegar os produtos' };
    }
  }
}