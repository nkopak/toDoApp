import { Router } from 'express';
import { container } from '../../diSetup';

const router = Router();

const userController: any = container.resolve('userController');

router.get('/', userController.getAllUsers);

router.get('/:userId', userController.getUserById);

router.post('/', userController.createUser);

router.put('/:userId', userController.updateUser);

router.delete('/:userId', userController.deleteUser);

export const userRouter = router;
