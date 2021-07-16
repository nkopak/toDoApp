import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('todos').del();

  // Inserts seed entries
  await knex('todos').insert([
    {
      id: '79d11cfa-8cff-4d15-84f3-07a100d6bd14',
      user_id: '314d910b-5e57-4183-8b05-ddbbd7822cd4',
      todoTitle: 'Learn JS'
    },
    {
      id: 'c862eb5f-3a4e-4173-8af5-1f71113fe4cb',
      user_id: '153c3fba-26fb-43ec-bb46-839bf9509bc1',
      todoTitle: 'Visit Synevyr'
    },
    {
      id: 'c248d851-42fe-484b-82c5-215bd51462ae',
      user_id: 'de1b8b1d-b960-4a4f-9a64-670d6209820d',
      todoTitle: 'Buy all wheel drive'
    },
    {
      id: '128ad2d1-e070-4492-be68-6d11e9554f6a',
      user_id: '153c3fba-26fb-43ec-bb46-839bf9509bc1',
      todoTitle: 'Visit 2 seas'
    }
  ]);
}
