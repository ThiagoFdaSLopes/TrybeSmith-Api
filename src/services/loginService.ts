import connection from '../models/connection';
import LoginModel from '../models/loginModel';
import { ILogin } from '../interfaces';

export default class LoginService {
  loginModel: LoginModel;

  constructor() {
    this.loginModel = new LoginModel(connection);
  }

  async userExist(body: ILogin) {
    try {
      const [result] = await this.loginModel.userExist(body);
      if (result.length === 0) throw new Error();
      return result;
    } catch (error) {
      throw new Error('Usuario ou login incorreto');
    }
  }
}