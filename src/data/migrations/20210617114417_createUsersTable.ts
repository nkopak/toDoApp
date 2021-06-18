import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('users', (table: Knex.TableBuilder) => {
    table.increments('userId').primary().notNullable();
    table.string('firstName').notNullable();
    table.string('lastName').notNullable();
    table.string('email').notNullable().unique();
    table.string('password').notNullable();
    table.string('role').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('users');
}
