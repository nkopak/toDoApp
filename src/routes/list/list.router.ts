import { Router } from 'express';
// import { todoListController } from '../../controllers';
import { todoItemRouter } from './todoItem';
import { container } from '../../diSetup';

const router = Router({ mergeParams: true });

const todoListController: any = container.resolve('todoListController');

router.get('/', todoListController.getAllTodoLists);

router.get('/:id', (req, res) => {
  res.json('List by id');
});

router.post('/', todoListController.createTodoList);

router.use('/:id/todoItems', todoItemRouter);

export const listRouter = router;
