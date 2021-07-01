import { IListItem } from '../../models';

export class TodoItemService {
  todoItemDao: any;
  constructor({ todoItemDao }: { todoItemDao: any }) {
    this.todoItemDao = todoItemDao;

    this.createTodoItem = this.createTodoItem.bind(this);
    this.getAllTodoItems = this.getAllTodoItems.bind(this);
    this.getItemById = this.getItemById.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  async createTodoItem(todoItemObject: Required<IListItem>): Promise<any> {
    await this.todoItemDao.createTodoItem(todoItemObject);
  }

  async getAllTodoItems(todoId: number): Promise<any> {
    const response = await this.todoItemDao.getAllTodoItems(todoId);

    return response;
  }

  async getItemById(itemId: number): Promise<any> {
    const response = await this.todoItemDao.getItemById(itemId);

    return response;
  }

  async updateItem(itemId: number, todoItemObject: IListItem): Promise<any> {
    const response = await this.todoItemDao.updateItem(itemId, todoItemObject);

    // console.log(todoItemObject);

    return response;
  }

  async deleteItem(itemId: number): Promise<any> {
    const response = await this.todoItemDao.deleteItem(itemId);

    return response;
  }
}

// export const todoItemService = new TodoItemService();
