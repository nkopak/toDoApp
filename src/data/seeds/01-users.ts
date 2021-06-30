import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('users').del();

  // Inserts seed entries
  await knex('users').insert([
    {
      id: 1,
      firstName: 'Nazar',
      lastName: 'Kopak',
      email: 'nazik@com',
      password: '12345',
      role: 'user'
    },
    {
      id: 2,
      firstName: 'Volodia',
      lastName: 'Ruby',
      email: 'volod@com',
      password: '12345',
      role: 'user'
    },
    {
      id: 3,
      firstName: 'Andrew',
      lastName: 'Dotnet',
      email: 'andr@com',
      password: '12345',
      role: 'user'
    }
  ]);
}
