import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('todos', (table: Knex.TableBuilder) => {
    table.increments();
    table.integer('user_id').notNullable().references('id').inTable('users');
    table.string('todoTitle').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('todos');
}
