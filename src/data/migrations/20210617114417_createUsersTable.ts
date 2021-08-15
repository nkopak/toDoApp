import { Knex } from 'knex';
// import * as uuid from 'uuid';

export async function up(knex: Knex): Promise<void> {
  await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

  await knex.schema.createTable('users', (table: Knex.TableBuilder) => {
    table
      .uuid('id')
      .primary()
      .notNullable()
      .defaultTo(knex.raw('uuid_generate_v4()'));
    table.string('firstName').notNullable().defaultTo('n/a');
    table.string('lastName').notNullable().defaultTo('n/a');
    table.string('email').notNullable().unique();
    table.string('password').notNullable();
    table.string('role').notNullable().defaultTo('user');
  });
}

export async function down(knex: Knex): Promise<void> {
  // await knex.raw('DROP EXTENSION IF EXISTS "uuid-ossp"');

  await knex.schema.dropTable('users');
}
