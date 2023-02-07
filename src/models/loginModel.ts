import { Pool, RowDataPacket } from 'mysql2/promise';
import { ILogin } from '../interfaces';

export default class LoginModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async userExist(body: ILogin) {
    const [result] = await this.connection.execute<RowDataPacket[]>(
      'SELECT id, username FROM Trybesmith.users WHERE username = ? AND password = ?',
      [body.username, body.password],
    );
    return result;
  }
}