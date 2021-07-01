import { db } from '../../data/db';
import { IListItem } from '../../models';

export class TodoItemDao {
  db: any;
  constructor({ db }: { db: any }) {
    this.db = db;
  }

  async createTodoItem(todoItemObject: IListItem): Promise<any> {
    const { userId, todoId, todoTitle, isCompleted } = todoItemObject;
    const result = await db('todoItems')
      .insert({
        user_id: userId,
        todo_id: todoId,
        todoTitle,
        isCompleted
      })
      .returning('*');

    return result;
  }

  //
  async getAllTodoItems(todoId: number): Promise<any> {
    const allTodoItems = await db('todoItems')
      .select('*')
      .where('todo_id', todoId);

    return allTodoItems;
  }

  async getItemById(itemId: number): Promise<any> {
    const todoItemById = await this.db('todoItems').where('id', itemId);

    return todoItemById;
  }

  async updateItem(itemId: number, todoItemObject: IListItem): Promise<any> {
    const updateItem = await this.db('todoItems')
      .update({
        todoTitle: todoItemObject.todoTitle,
        isCompleted: todoItemObject.isCompleted
      })
      .where('id', itemId);

    console.log(todoItemObject);

    return updateItem;
  }

  async deleteItem(itemId: number): Promise<void> {
    const deleteItem = await this.db('todoItems').where('id', itemId).del();

    return deleteItem;
  }
}

// export const todoItemDao = new TodoItemDao();
