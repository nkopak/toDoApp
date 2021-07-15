import { Router } from 'express';
import { container } from '../../diSetup';

const router = Router();

const authController: any = container.resolve('authController');
const authMiddleware: any = container.resolve('authMiddleware');

router.post(
  '/register',
  authMiddleware.isUserValid,
  authMiddleware.isUserAlreadyExist,
  authController.register
);

// router.post('/confirm', authController.confirmUser);

router.post('/login', authController.login);

router.get(
  '/roles',
  authMiddleware.token,
  authMiddleware.checkRole,
  authController.roles
);

export const authRouter = router;
