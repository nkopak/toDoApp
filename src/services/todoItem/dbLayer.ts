import { db } from '../../data/db';
import { IListItem } from '../../models';

class TodoItemDao {
  async createTodoItem(todoItemObject: IListItem) {
    const todoItem = await db('todoItems').insert({ todoItemObject });

    return todoItem;
  }

  async getAllTodoItems() {
    const allTodoItems = await db('todoItems').select('*');

    return allTodoItems;
  }
}

export const todoItemDao = new TodoItemDao();
