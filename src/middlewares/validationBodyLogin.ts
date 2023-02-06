import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import { ILogin } from '../interfaces';

const validateBody = (body: ILogin) => Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
}).validate(body);

const validationLogin = (req: Request, res: Response, next: NextFunction) => {
  const { error } = validateBody(req.body);

  if (error) return res.status(400).json({ message: error.message });

  next();
};

export default validationLogin;