import * as awilix from 'awilix';
import {
  AuthController,
  TodoItemController,
  TodoListController,
  UserController
} from './controllers';
import { AuthMiddleware } from './middlewares';
import {
  AuthDao,
  AuthService,
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
    authController: awilix.asClass(AuthController),
    todoListController: awilix.asClass(TodoListController),
    todoItemController: awilix.asClass(TodoItemController),
    userController: awilix.asClass(UserController),

    authMiddleware: awilix.asClass(AuthMiddleware),

    authService: awilix.asClass(AuthService),
    todoListService: awilix.asClass(TodoListService),
    todoItemService: awilix.asClass(TodoItemService),
    userService: awilix.asClass(UserService),

    authDao: awilix.asClass(AuthDao),
    todoListDao: awilix.asClass(TodoListDao),
    todoItemDao: awilix.asClass(TodoItemDao),
    userDao: awilix.asClass(UserDao),

    db: awilix.asValue(db)
  });
}

export { container, setup };
