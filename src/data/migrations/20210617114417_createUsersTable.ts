import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('users', (table: Knex.TableBuilder) => {
    table.increments();
    table.string('firstName').notNullable().defaultTo('n/a');
    table.string('lastName').notNullable().defaultTo('n/a');
    table.string('email').notNullable().unique();
    table.string('password').notNullable();
    table.string('role').notNullable().defaultTo('user');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('users');
}
