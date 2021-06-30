import { Router } from 'express';
import { todoItemController } from '../../../controllers';

const router = Router();

router.get('/', todoItemController.getAllTodoItems);

router.get('/:id', (req, res) => {
  res.json('List by id');
});

router.post('/', todoItemController.createTodoItem);

export const todoItemRouter = router;
