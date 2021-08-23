import { Request, Response } from 'express';
import { IListItem } from 'src/models';
import { StatusCodes } from 'http-status-codes';
// import { successMessage } from '../messages';

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
      const { todoId, userId } = req.params;

      const response = await this.todoItemService.createTodoItem(
        todoId,
        userId,
        req.body
      );

      res.status(StatusCodes.CREATED).json(response);
      // .json(successMessage.TODO_ITEM_CREATED);
    } catch (error) {
      console.error(error);
    }
  }

  async getAllTodoItems(req: Request, res: Response): Promise<void> {
    try {
      const { todoId, userId } = req.params;
      const response = await this.todoItemService.getAllTodoItems(
        todoId,
        userId
      );

      res.status(StatusCodes.OK).json(response);
    } catch (error) {
      console.error(error);
    }
  }

  async getItemById(req: Request, res: Response): Promise<void> {
    try {
      const { itemId } = req.params;
      const response = await this.todoItemService.getItemById(itemId);

      res.status(StatusCodes.OK).json(response);
    } catch (error) {
      console.error(error);
    }
  }

  async updateItem(req: Request, res: Response): Promise<void> {
    try {
      const { itemId } = req.params;
      const todoItem: IListItem = req.body;

      const response = await this.todoItemService.updateItem(itemId, todoItem);

      res.status(StatusCodes.OK).json(response);
      // .json(successMessage.TODO_ITEM_UPDATED);
    } catch (error) {
      console.error(error);
    }
  }

  async deleteItem(req: Request, res: Response): Promise<void> {
    try {
      const { itemId } = req.params;
      const response = await this.todoItemService.deleteItem(itemId);

      res.status(StatusCodes.OK).json(response);
      // .json(successMessage.TODO_ITEM_DELETED);
    } catch (error) {
      console.error(error);
    }
  }
}

// export const todoItemController = new TodoItemController();
