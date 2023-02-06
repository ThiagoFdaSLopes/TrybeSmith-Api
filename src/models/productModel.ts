import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { IProductCreate } from '../interfaces';

export default class ProductModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async createProduct(body: IProductCreate) {
    const [{ insertId }] = await
    this.connection.execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)`, [body.name, body.amount]);

    return insertId;
  }

  async getAllProducts(): Promise<RowDataPacket[]> {
    const [result] = await this.connection.execute<RowDataPacket[]>(`
    SELECT * FROM Trybesmith.products`);

    return result;
  }
}