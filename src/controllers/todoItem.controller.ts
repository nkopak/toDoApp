import { Request, Response } from 'express';
import { todoItemService } from '../services';

class TodoItemController {
  async createTodoItem(req: Request, res: Response) {
    try {
      await todoItemService.createTodoItem(req.body);

      res.json('Todo item is created');
    } catch (error) {
      console.error(error);
    }
  }

  async getAllTodoItems(req: Request, res: Response) {
    try {
      const response = await todoItemService.getAllTodoItems();

      res.json(response);
    } catch (error) {
      console.error(error);
    }
  }
}

export const todoItemController = new TodoItemController();
