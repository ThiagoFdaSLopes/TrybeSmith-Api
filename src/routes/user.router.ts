import express from 'express';
import UserController from '../controllers/userController';
import validateUserName from '../middlewares/validateUserName';
import validatePassword from '../middlewares/validatePassword';
import validateVocation from '../middlewares/validateVocation';
import validateLevel from '../middlewares/validateLevel';

const userController = new UserController();

const router = express.Router();

router.post(
  '/',
  validateUserName,
  validateVocation,
  validateLevel,
  validatePassword,
  userController.createUser,
);

export default router;