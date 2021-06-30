import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('todoItems').del();

  // Inserts seed entries
  await knex('todoItems').insert([
    {
      id: 1,
      todo_id: 1,
      user_id: 1,
      todoTitle: 'Take courses',
      isCompleted: true
    },
    {
      id: 2,
      todo_id: 2,
      user_id: 2,
      todoTitle: 'Repair car',
      isCompleted: true
    },
    {
      id: 3,
      todo_id: 2,
      user_id: 2,
      todoTitle: 'Book a house',
      isCompleted: true
    },
    {
      id: 4,
      todo_id: 3,
      user_id: 3,
      todoTitle: 'Buy car parts',
      isCompleted: true
    },
    {
      id: 5,
      todo_id: 3,
      user_id: 3,
      todoTitle: 'Book car service',
      isCompleted: false
    },
    {
      id: 6,
      todo_id: 1,
      user_id: 1,
      todoTitle: 'Practice coding',
      isCompleted: true
    },
    {
      id: 7,
      todo_id: 1,
      user_id: 1,
      todoTitle: 'Read documentation',
      isCompleted: false
    },
    {
      id: 8,
      todo_id: 3,
      user_id: 3,
      todoTitle: 'Have enough money',
      isCompleted: true
    },
    {
      id: 9,
      todo_id: 4,
      user_id: 2,
      todoTitle: 'Visit Black sea',
      isCompleted: false
    },
    {
      id: 10,
      todo_id: 4,
      user_id: 2,
      todoTitle: 'Visit Azov sea',
      isCompleted: false
    }
  ]);
}
