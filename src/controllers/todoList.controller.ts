import { Request, Response } from 'express';
import { IList } from 'src/models';
import { StatusCodes } from 'http-status-codes';
// import { successMessage } from '../messages';

export class TodoListController {
  todoListService: any;
  constructor({ todoListService }: { todoListService: any }) {
    this.todoListService = todoListService;

    this.createTodoList = this.createTodoList.bind(this);
    this.getAllTodoLists = this.getAllTodoLists.bind(this);
    this.getTodoListById = this.getTodoListById.bind(this);
    this.updateTodoList = this.updateTodoList.bind(this);
    this.deleteTodoList = this.deleteTodoList.bind(this);
  }

  async createTodoList(req: Request, res: Response): Promise<void> {
    try {
      const todoList: IList = req.body;

      const response = await this.todoListService.createTodoList(todoList);

      res
        .status(StatusCodes.CREATED)
        // .json(successMessage.TODO_LIST_CREATED)
        .json(response);
    } catch (error) {
      console.error(error);
    }
  }

  async getAllTodoLists(req: Request, res: Response): Promise<void> {
    try {
      const { userId } = req.params;
      const response = await this.todoListService.getAllTodoLists(userId);

      res.status(StatusCodes.OK).json(response);
    } catch (error) {
      console.error(error);
    }
  }

  async getTodoListById(req: Request, res: Response): Promise<void> {
    try {
      const { todoId } = req.params;

      const response = await this.todoListService.getTodoListById(todoId);

      res.status(StatusCodes.OK).json(response);
    } catch (error) {
      console.error(error);
    }
  }

  async updateTodoList(req: Request, res: Response): Promise<void> {
    try {
      const todoList: IList = req.body;
      const { todoId } = req.params;

      const response = await this.todoListService.updateTodoList(
        todoId,
        todoList
      );

      res.status(StatusCodes.OK).json(response);
      // .json(successMessage.TODO_LIST_UPDATED);
    } catch (error) {
      console.error(error);
    }
  }

  async deleteTodoList(req: Request, res: Response): Promise<void> {
    try {
      const { todoId } = req.params;
      const response = await this.todoListService.deleteTodoList(todoId);

      res
        .status(StatusCodes.OK)
        // .json(successMessage.TODO_LIST_DELETED)
        .json(response);
    } catch (error) {
      console.error(error);
    }
  }
}

// export const todoListController = new TodoListController();
