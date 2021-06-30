import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('todos').del();

  // Inserts seed entries
  await knex('todos').insert([
    { id: 1, user_id: 1, todoTitle: 'Learn JS' },
    { id: 2, user_id: 2, todoTitle: 'Visit Synevyr' },
    { id: 3, user_id: 3, todoTitle: 'Buy all wheel drive' },
    { id: 4, user_id: 2, todoTitle: 'Visit 2 seas' }
  ]);
}
