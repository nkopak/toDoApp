import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('users').del();

  // Inserts seed entries
  await knex('users').insert([
    {
      id: '314d910b-5e57-4183-8b05-ddbbd7822cd4',
      firstName: 'Nazar',
      lastName: 'Kopak',
      email: 'nazik@com',
      password: '12345',
      role: 'user'
    },
    {
      id: '153c3fba-26fb-43ec-bb46-839bf9509bc1',
      firstName: 'Volodia',
      lastName: 'Ruby',
      email: 'volod@com',
      password: '12345',
      role: 'user'
    },
    {
      id: 'de1b8b1d-b960-4a4f-9a64-670d6209820d',
      firstName: 'Andrew',
      lastName: 'Dotnet',
      email: 'andr@com',
      password: '12345',
      role: 'user'
    },
    {
      id: '581be239-08de-456b-b250-05db584475cf',
      firstName: 'Admin',
      lastName: 'Admin',
      email: 'admin@todo.com',
      password: '$2y$10$54jNo7SgXHlJ0fs3oDQ6..deb0hPPDJ2y8wKLgrsxGWmGexUKQ4Fy',
      role: 'admin'
    }
  ]);
}
