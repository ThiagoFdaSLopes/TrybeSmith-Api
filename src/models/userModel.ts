import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IUserCreate } from '../interfaces';

export default class UserModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async createUser(body: IUserCreate) {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES(?, ?, ?, ?)
    `, [body.username, body.vocation, body.level, body.password]);

    return insertId;
  }
}