import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  // await knex('todo').del();

  // Inserts seed entries
  await knex('todo').insert([
    { id: 1, todo_title: 'JS', text: 'Learn pure JS' },
    { id: 2, todo_title: 'knex', text: 'Learn knex' },
    { id: 3, todo_title: 'Next', text: 'Overview Next.js' }
  ]);
  await knex('user').insert([
    { id: 1, first_name: 'Nazar', last_name: 'Kopak' }
  ]);
}
