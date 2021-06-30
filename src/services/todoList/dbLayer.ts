// import { db } from '../../data/db';
import { IList } from '../../models';

export class TodoListDao {
  db: any;
  constructor({ db }: { db: any }) {
    this.db = db;
  }

  async createTodoList(todoListObj: IList): Promise<any> {
    const { userId, todoTitle } = todoListObj;
    const result = await this.db('todos')
      .insert({ user_id: userId, todoTitle })
      .returning('*');

    return result;
  }

  async getAllTodoLists(): Promise<any> {
    const allTodoLists = await this.db('todos').select('*');

    return allTodoLists;
  }
}

// export const todoListDao = new TodoListDao();
