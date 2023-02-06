import { Pool, RowDataPacket } from 'mysql2/promise';

export default class OrderModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async getAllOrders(): Promise<RowDataPacket[]> {
    const [result] = await this.connection.execute<RowDataPacket[]>(`
    SELECT ts.id, ts.user_id AS userId, json_arrayagg(pr.id) AS productsIds
    FROM Trybesmith.orders AS ts
    INNER JOIN Trybesmith.products AS pr ON
    ts.id = pr.order_id
    GROUP BY ts.id
    `);

    return result;
  }
}