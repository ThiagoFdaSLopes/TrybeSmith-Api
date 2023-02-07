import { Request, Response } from 'express';
import UserService from '../services/userService';
import createToken from '../utils/jwt';

export default class UserController {
  constructor(private userService = new UserService()) {}

  createUser = async (req: Request, res: Response) => {
    try {
      const id = await this.userService.createUser(req.body);
      const payload = {
        id,
        username: req.body.username,
      };
      const token = createToken(payload);
      res.status(201).json({ token });
    } catch (error) {
      res.status(500).json({ message: 'Erro na hora de criar o usuario' });
    }
  };
}