import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable('todo', function (table) {
      table.increments();
      table.string('todo_title', 50).notNullable();
      table.string('text', 128).notNullable();
    })
    .createTable('user', function (table) {
      table.increments('id');
      table.string('first_name', 50).notNullable();
      table.string('last_name', 50).notNullable();
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('todo').dropTable('user');
}
