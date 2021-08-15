import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

  await knex.schema.createTable('todoItems', (table: Knex.TableBuilder) => {
    table
      .uuid('id')
      .primary()
      .notNullable()
      .defaultTo(knex.raw('uuid_generate_v4()'));
    table
      .uuid('todo_id')
      .notNullable()
      .references('id')
      .inTable('todos')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table.uuid('user_id').notNullable().references('id').inTable('users');
    table.string('todoTitle').notNullable();
    table.boolean('isCompleted').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  // await knex.raw('DROP EXTENSION IF EXISTS "uuid-ossp"');

  await knex.schema.dropTable('todoItems');
}
