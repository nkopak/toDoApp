// import { IList } from '../../models';
import { IList } from 'src/models';
// import { todoListDao } from './dbLayer';

export class TodoListService {
  todoListDao: any;
  constructor({ todoListDao }: { todoListDao: any }) {
    this.todoListDao = todoListDao;

    this.createTodoList = this.createTodoList.bind(this);
    this.getAllTodoLists = this.getAllTodoLists.bind(this);
  }

  async createTodoList(todoListObj: IList): Promise<void> {
    // await console.log('List object---> ' + todoListObj);
    const newTodoList = await this.todoListDao.createTodoList(todoListObj);
    // await console.log(newTodoList);

    return newTodoList;
  }

  async getAllTodoLists(): Promise<void> {
    const response = await this.todoListDao.getAllTodoLists();

    return response;
  }
}

// export const todoListService = new TodoListService();
