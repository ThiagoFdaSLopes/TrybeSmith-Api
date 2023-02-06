import express from 'express';
import UserController from '../controllers/userController';

const userController = new UserController();

const router = express.Router();

router.post('/', userController.createUser);

export default router;