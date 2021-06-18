import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('todoItems', (table: Knex.TableBuilder) => {
    table.increments('todoItemId').primary().notNullable();
    table.integer('todoId').references('todoId').inTable('todos');
    table.integer('userId').references('userId').inTable('users');
    table.string('taskTitle').notNullable();
    table.boolean('isCompleted').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('todoItems');
}
