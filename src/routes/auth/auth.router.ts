import { Router } from 'express';
import { container } from '../../diSetup';

const router = Router();

const userController: any = container.resolve('userController');
const userMiddleware: any = container.resolve('userMiddleware');

router.post(
  '/',
  userMiddleware.isUserValid,
  userMiddleware.isUserAlreadyExist,
  userController.createUser
);

export const authRouter = router;
