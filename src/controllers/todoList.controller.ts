import { Request, Response } from 'express';
// import { TodoListService } from 'src/services';
// import { todoListService } from '../services';

export class TodoListController {
  todoListService: any;
  constructor({ todoListService }: { todoListService: any }) {
    this.todoListService = todoListService;

    this.createTodoList = this.createTodoList.bind(this);
    this.getAllTodoLists = this.getAllTodoLists.bind(this);
  }

  async createTodoList(req: Request, res: Response) {
    try {
      const todoList = req.body;

      const response = await this.todoListService.createTodoList(todoList);
      console.log(response);

      res.json('List has been created');
    } catch (error) {
      console.error(error);
    }
  }

  async getAllTodoLists(req: Request, res: Response) {
    try {
      const allTodoLists = await this.todoListService.getAllTodoLists();

      res.json(allTodoLists);
      console.log(allTodoLists);
    } catch (error) {
      console.error(error);
    }
  }
}

// export const todoListController = new TodoListController();
