import { Router } from 'express';
import { listRouter } from '../list';
import { container } from '../../diSetup';

const router = Router();

const userController: any = container.resolve('userController');

router.get('/', userController.getAllUsers);

router.get('/:userId', userController.getUserById);

// router.post('/', userController.createUser);

router.put('/:userId', userController.updateUser);

router.delete('/:userId', userController.deleteUser);

router.use('/:userId/lists', listRouter);

export const userRouter = router;
