import { NextFunction, Request, Response } from 'express';
import validateTokenUser from '../utils/jwtValidateToken';

const validateToken = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Token not found' });

  try {
    const result = validateTokenUser(authorization);
    req.body.user = result;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default validateToken;