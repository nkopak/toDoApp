import { Router } from 'express';
import { listRouter } from '../list';
import { container } from '../../diSetup';

const router = Router();

const userController: any = container.resolve('userController');
const authMiddleware: any = container.resolve('authMiddleware');

router.get(
  '/',
  authMiddleware.token,
  authMiddleware.isAdmin,
  userController.getAllUsers
);

router.get('/:userId', authMiddleware.token, userController.getUserById);

//register in authController
// router.post('/', userController.createUser);

router.put('/:userId', authMiddleware.token, userController.updateUser);

router.delete('/:userId', authMiddleware.token, userController.deleteUser);

router.use('/:userId/lists', authMiddleware.token, listRouter);

export const userRouter = router;
