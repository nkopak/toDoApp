import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('todoItems', (table: Knex.TableBuilder) => {
    table.increments();
    table.integer('todo_id').notNullable().references('id').inTable('todos');
    table.integer('user_id').notNullable().references('id').inTable('users');
    table.string('todoTitle').notNullable();
    table.boolean('isCompleted').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('todoItems');
}
