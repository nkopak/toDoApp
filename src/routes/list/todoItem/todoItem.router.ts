import { Router } from 'express';
import { container } from '../../../diSetup';

const router = Router({ mergeParams: true });

const todoItemController: any = container.resolve('todoItemController');

router.get('/', todoItemController.getAllTodoItems);

router.get('/:itemId', todoItemController.getItemById);

router.post('/', todoItemController.createTodoItem);

router.put('/:itemId', todoItemController.updateItem);

router.delete('/:itemId', todoItemController.deleteItem);

export const todoItemRouter = router;
