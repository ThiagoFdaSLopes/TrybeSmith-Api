import { Response, Request } from 'express';
import LoginService from '../services/loginService';
import createToken from '../utils/jwt';

export default class LoginController {
  constructor(private loginService = new LoginService()) {}

  userExist = async (req: Request, res: Response) => {
    try {
      const result = await this.loginService.userExist(req.body);
      const token = createToken(result);
      res.status(200).json({ token });
    } catch (error) {
      res.status(401).json({ message: 'Username or password invalid' });
    }
  };
}