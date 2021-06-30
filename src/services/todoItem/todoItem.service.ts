import { IListItem } from '../../models';
import { todoItemDao } from './dbLayer';

class TodoItemService {
  createTodoItem(todoItemObject: Required<IListItem>) {
    return todoItemDao.createTodoItem(todoItemObject);
  }

  getAllTodoItems() {
    return todoItemDao.getAllTodoItems();
  }
}

export const todoItemService = new TodoItemService();
