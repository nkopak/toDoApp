import * as awilix from 'awilix';
import { TodoItemController, TodoListController } from './controllers';
import { TodoItemService, TodoListService } from './services';
import { TodoItemDao, TodoListDao } from './services';
import { db } from './data/db';

const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY
});

function setup(): void {
  container.register({
    todoListController: awilix.asClass(TodoListController),
    todoItemController: awilix.asClass(TodoItemController),

    todoListService: awilix.asClass(TodoListService),
    todoItemService: awilix.asClass(TodoItemService),

    todoListDao: awilix.asClass(TodoListDao),
    todoItemDao: awilix.asClass(TodoItemDao),

    db: awilix.asValue(db)
  });
}

export { container, setup };
