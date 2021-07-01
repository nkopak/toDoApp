import { Request, Response } from 'express';
import { IListItem } from 'src/models';
// import { todoItemService } from '../services';

export class TodoItemController {
  todoItemService: any;
  constructor({ todoItemService }: { todoItemService: any }) {
    this.todoItemService = todoItemService;

    this.createTodoItem = this.createTodoItem.bind(this);
    this.getAllTodoItems = this.getAllTodoItems.bind(this);
    this.getItemById = this.getItemById.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  async createTodoItem(req: Request, res: Response): Promise<void> {
    try {
      await this.todoItemService.createTodoItem(req.body);

      res.json('Todo item is created');
    } catch (error) {
      console.error(error);
    }
  }

  async getAllTodoItems(req: Request, res: Response): Promise<void> {
    try {
      const { todoId } = req.params;
      const response = await this.todoItemService.getAllTodoItems(todoId);

      res.json(response);
    } catch (error) {
      console.error(error);
    }
  }

  async getItemById(req: Request, res: Response): Promise<void> {
    try {
      const { itemId } = req.params;
      const response = await this.todoItemService.getItemById(itemId);

      res.json(response);
    } catch (error) {
      console.error(error);
    }
  }

  async updateItem(req: Request, res: Response): Promise<void> {
    try {
      const { itemId } = req.params;
      const todoItem: IListItem = req.body;

      await this.todoItemService.updateItem(itemId, todoItem);

      res.json(todoItem);
      // console.log(todoItem);
    } catch (error) {
      console.error(error);
    }
  }

  async deleteItem(req: Request, res: Response): Promise<void> {
    try {
      const { itemId } = req.params;
      await this.todoItemService.deleteItem(itemId);

      res.json('Todo item was deleted');
    } catch (error) {
      console.error(error);
    }
  }
}

// export const todoItemController = new TodoItemController();
