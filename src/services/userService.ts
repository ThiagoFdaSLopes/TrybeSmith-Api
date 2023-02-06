import { IUserCreate } from '../interfaces';
import connection from '../models/connection';
import UserModel from '../models/userModel';

export default class UserService {
  userModel: UserModel;

  constructor() {
    this.userModel = new UserModel(connection);
  }

  async createUser(body: IUserCreate) {
    try {
      const result = await this.userModel.createUser(body);
      return { message: result };
    } catch (error) {
      return { message: 'Erro ao criar o usuario' };
    }
  }
}