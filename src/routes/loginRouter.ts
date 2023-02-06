import express from 'express';
import LoginController from '../controllers/loginController';
import validationLogin from '../middlewares/validationBodyLogin';

const loginController = new LoginController();

const router = express.Router();

router.post('/', validationLogin, loginController.userExist);

export default router;