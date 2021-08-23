import { db } from '../../data/db';
import { IListItem } from '../../models';

export class TodoItemDao {
  db: any;
  constructor({ db }: { db: any }) {
    this.db = db;
  }

  async createTodoItem(
    todoId: string,
    userId: string,
    todoItemObject: IListItem
  ): Promise<any> {
    const { todoTitle, isCompleted } = todoItemObject;
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

  async getAllTodoItems(todoId: string, userId: string): Promise<any> {
    const allTodoItems = await db('todoItems')
      .select('*')
      .where('todo_id', todoId)
      .where('user_id', userId);

    return allTodoItems;
  }

  async getItemById(itemId: string): Promise<any> {
    const todoItemById = await this.db('todoItems').where('id', itemId);

    return todoItemById;
  }

  async updateItem(itemId: string, todoItemObject: IListItem): Promise<any> {
    const updateItem = await this.db('todoItems')
      .update({
        todoTitle: todoItemObject.todoTitle,
        isCompleted: todoItemObject.isCompleted
      })
      .where('id', itemId)
      .returning('*');

    return updateItem;
  }

  async deleteItem(itemId: string): Promise<void> {
    const deleteItem = await this.db('todoItems')
      .where('id', itemId)
      .del()
      .returning('*');

    return deleteItem;
  }
}

// export const todoItemDao = new TodoItemDao();
