import { NextFunction, Request, Response } from 'express';

const
  validateUserName = async (req: Request, res: Response, next: NextFunction) => {
    const { username } = req.body;
    if (!username) return res.status(400).json({ message: '"username" is required' });
    if (typeof username !== 'string') { 
      return res.status(422).json({ message: '"username" must be a string' }); 
    }
    if (username.length < 3) {
      return res.status(422).json({
        message: '"username" length must be at least 3 characters long' });
    }
    next();
  };

export default validateUserName;