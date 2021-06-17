import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema
    .createTable('todo', (table) => {
      table.increments();
      table.string('todoTitle', 50).notNullable();
      table.string('text', 128).notNullable();
    })
    .createTable('user', (table) => {
      table.increments('id');
      table.string('firstName', 50).notNullable();
      table.string('lastName', 50).notNullable();
    });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('todo').dropTable('user');
}
