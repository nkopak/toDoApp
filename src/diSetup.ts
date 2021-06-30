import * as awilix from 'awilix';
import { TodoListController } from './controllers';
import { TodoListService } from './services';
import { TodoListDao } from './services';
import { db } from './data/db';

const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY
});

function setup(): void {
  container.register({
    todoListController: awilix.asClass(TodoListController),
    todoListService: awilix.asClass(TodoListService),
    todoListDao: awilix.asClass(TodoListDao),
    db: awilix.asValue(db)
  });
}

export { container, setup };
