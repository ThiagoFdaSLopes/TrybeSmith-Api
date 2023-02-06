import { Pool, RowDataPacket } from 'mysql2/promise';
import { ILogin, ILoginPayload } from '../interfaces';

export default class LoginModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async userExist(body: ILogin): Promise<ILoginPayload> {
    const [[result]] = await this.connection.execute<RowDataPacket[] & ILoginPayload>(
      'SELECT * FROM Trybesmith.users WHERE username = ? AND password = ?',
      [body.username, body.password],
    );

    return result as ILoginPayload;
  }
}