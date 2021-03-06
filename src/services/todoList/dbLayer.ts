import { IList } from '../../models';

export class TodoListDao {
  db: any;
  constructor({ db }: { db: any }) {
    this.db = db;
  }

  async createTodoList(todoListObj: IList): Promise<any> {
    const { userId, todoTitle } = todoListObj;
    const result = await this.db('todos')
      .insert({ userId, todoTitle })
      .returning('*');

    return result;
  }

  async getAllTodoLists(userId: string): Promise<any> {
    const allTodoLists = await this.db('todos')
      .select('*')
      .where('userId', userId);

    return allTodoLists;
  }

  async getTodoListById(todoId: string): Promise<any> {
    const todoList = await this.db('todos').select('*').where('id', todoId);

    return todoList;
  }

  async updateTodoList(todoId: string, todoListObj: IList): Promise<any> {
    const newTodoList = await this.db('todos')
      .update({ todoTitle: todoListObj.todoTitle })
      .where('id', todoId)
      .returning('*');

    return newTodoList;
  }

  async deleteTodoList(todoId: string): Promise<any> {
    const todoListForDelete = await this.db('todos')
      .where('id', todoId)
      .returning('*')
      .del();

    return todoListForDelete;
  }
}

// export const todoListDao = new TodoListDao();
