import { IList } from 'src/models';

export class TodoListService {
  todoListDao: any;
  constructor({ todoListDao }: { todoListDao: any }) {
    this.todoListDao = todoListDao;

    this.createTodoList = this.createTodoList.bind(this);
    this.getAllTodoLists = this.getAllTodoLists.bind(this);
    this.getTodoListById = this.getTodoListById.bind(this);
    this.updateTodoList = this.updateTodoList.bind(this);
    this.deleteTodoList = this.deleteTodoList.bind(this);
  }

  async createTodoList(todoListObj: IList): Promise<any> {
    const newTodoList = await this.todoListDao.createTodoList(todoListObj);

    return newTodoList;
  }

  async getAllTodoLists(userId: string): Promise<any> {
    const response = await this.todoListDao.getAllTodoLists(userId);

    return response;
  }

  async getTodoListById(todoId: number): Promise<any> {
    const response = await this.todoListDao.getTodoListById(todoId);

    return response;
  }

  async updateTodoList(todoId: number, todoListObj: IList): Promise<any> {
    const response = await this.todoListDao.updateTodoList(todoId, todoListObj);

    return response;
  }

  async deleteTodoList(todoId: number): Promise<void> {
    const response = await this.todoListDao.deleteTodoList(todoId);

    return response;
  }
}

// export const todoListService = new TodoListService();
