import { Router } from 'express';
import { todoItemRouter } from './todoItem';
import { container } from '../../diSetup';

const router = Router();

const todoListController: any = container.resolve('todoListController');

router.get('/', todoListController.getAllTodoLists);

router.get('/:todoId', todoListController.getTodoListById);

router.post('/', todoListController.createTodoList);

router.put('/:todoId', todoListController.updateTodoList);

router.delete('/:todoId', todoListController.deleteTodoList);

router.use('/:todoId/todoItems', todoItemRouter);

export const listRouter = router;
