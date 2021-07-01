import { Request, Response } from 'express';
import { IList } from 'src/models';

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
      console.log(response);

      res.json('List has been created');
    } catch (error) {
      console.error(error);
    }
  }

  async getAllTodoLists(req: Request, res: Response): Promise<void> {
    try {
      const allTodoLists = await this.todoListService.getAllTodoLists();

      res.json(allTodoLists);
    } catch (error) {
      console.error(error);
    }
  }

  async getTodoListById(req: Request, res: Response): Promise<void> {
    try {
      const { todoId } = req.params;

      const todoById = await this.todoListService.getTodoListById(todoId);

      res.json(todoById);
    } catch (error) {
      console.error(error);
    }
  }

  async updateTodoList(req: Request, res: Response): Promise<void> {
    try {
      const todoList: IList = req.body;
      const { todoId } = req.params;

      await this.todoListService.updateTodoList(todoId, todoList);

      res.json('List was updated');
    } catch (error) {
      console.error(error);
    }
  }

  async deleteTodoList(req: Request, res: Response): Promise<void> {
    try {
      const { todoId } = req.params;
      await this.todoListService.deleteTodoList(todoId);

      res.json('List was deleted');
    } catch (error) {
      console.error(error);
    }
  }
}

// export const todoListController = new TodoListController();
