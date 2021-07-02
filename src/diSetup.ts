import * as awilix from 'awilix';
import {
  TodoItemController,
  TodoListController,
  UserController
} from './controllers';
import {
  TodoItemDao,
  TodoItemService,
  TodoListDao,
  TodoListService,
  UserDao,
  UserService
} from './services';
import { db } from './data/db';

const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY
});

function setup(): void {
  container.register({
    todoListController: awilix.asClass(TodoListController),
    todoItemController: awilix.asClass(TodoItemController),
    userController: awilix.asClass(UserController),

    todoListService: awilix.asClass(TodoListService),
    todoItemService: awilix.asClass(TodoItemService),
    userService: awilix.asClass(UserService),

    todoListDao: awilix.asClass(TodoListDao),
    todoItemDao: awilix.asClass(TodoItemDao),
    userDao: awilix.asClass(UserDao),

    db: awilix.asValue(db)
  });
}

export { container, setup };
