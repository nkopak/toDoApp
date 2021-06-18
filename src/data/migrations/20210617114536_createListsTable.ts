import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('todos', (table: Knex.TableBuilder) => {
    table.increments('todoId').primary().notNullable();
    table.integer('userId').references('userId').inTable('users').notNullable();
    table.string('todoTitle').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('todos');
}
