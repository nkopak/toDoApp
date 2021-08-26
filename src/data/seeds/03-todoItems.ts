import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('todoItems').del();

  // Inserts seed entries
  await knex('todoItems').insert([
    {
      id: 'a197feb7-5433-4988-a239-5f4e6b38a105',
      todoId: '79d11cfa-8cff-4d15-84f3-07a100d6bd14',
      userId: '314d910b-5e57-4183-8b05-ddbbd7822cd4',
      todoTitle: 'Take courses',
      isCompleted: true
    },
    {
      id: '644b21a8-d13b-4ea7-81dd-6305eae44b66',
      todoId: 'c862eb5f-3a4e-4173-8af5-1f71113fe4cb',
      userId: '153c3fba-26fb-43ec-bb46-839bf9509bc1',
      todoTitle: 'Repair car',
      isCompleted: true
    },
    {
      id: 'c9027a49-4753-420d-84ba-936297721473',
      todoId: 'c862eb5f-3a4e-4173-8af5-1f71113fe4cb',
      userId: '153c3fba-26fb-43ec-bb46-839bf9509bc1',
      todoTitle: 'Book a house',
      isCompleted: true
    },
    {
      id: 'f5411c5b-8457-481c-b12f-0231ea90add4',
      todoId: 'c248d851-42fe-484b-82c5-215bd51462ae',
      userId: 'de1b8b1d-b960-4a4f-9a64-670d6209820d',
      todoTitle: 'Buy car parts',
      isCompleted: true
    },
    {
      id: '39593c09-99cd-46c2-8a43-1641139e8a2a',
      todoId: 'c248d851-42fe-484b-82c5-215bd51462ae',
      userId: 'de1b8b1d-b960-4a4f-9a64-670d6209820d',
      todoTitle: 'Book car service',
      isCompleted: false
    },
    {
      id: '05594b2f-70d4-4cf2-9656-968f471e3a24',
      todoId: '79d11cfa-8cff-4d15-84f3-07a100d6bd14',
      userId: '314d910b-5e57-4183-8b05-ddbbd7822cd4',
      todoTitle: 'Practice coding',
      isCompleted: true
    },
    {
      id: '5cd010ab-0d29-4c91-a8ed-3e32c7bd8f54',
      todoId: '79d11cfa-8cff-4d15-84f3-07a100d6bd14',
      userId: '314d910b-5e57-4183-8b05-ddbbd7822cd4',
      todoTitle: 'Read documentation',
      isCompleted: false
    },
    {
      id: '74483374-6577-44e8-a32d-a2ca79226a5e',
      todoId: 'c248d851-42fe-484b-82c5-215bd51462ae',
      userId: 'de1b8b1d-b960-4a4f-9a64-670d6209820d',
      todoTitle: 'Have enough money',
      isCompleted: true
    },
    {
      id: '74820c68-37a8-469a-a060-651408d2ff2d',
      todoId: '128ad2d1-e070-4492-be68-6d11e9554f6a',
      userId: '153c3fba-26fb-43ec-bb46-839bf9509bc1',
      todoTitle: 'Visit Black sea',
      isCompleted: false
    },
    {
      id: '2fe57fec-a570-4ca1-a0e5-8a54865e62bf',
      todoId: '128ad2d1-e070-4492-be68-6d11e9554f6a',
      userId: '153c3fba-26fb-43ec-bb46-839bf9509bc1',
      todoTitle: 'Visit Azov sea',
      isCompleted: false
    }
  ]);
}
