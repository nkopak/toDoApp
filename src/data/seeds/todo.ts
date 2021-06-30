// import { Knex } from 'knex';

// export async function seed(knex: Knex): Promise<void> {
//   // Deletes ALL existing entries
//   // await knex('todo').del();

//   // Inserts seed entries
//   await knex('todos').insert([
//     { todoId: 1, userId: 1, todoTitle: 'Learn JS' },
//     { todoId: 2, userId: 2, todoTitle: 'Visit Synevyr' },
//     { todoId: 3, userId: 3, todoTitle: 'Buy all wheel drive' },
//     { todoId: 4, userId: 2, todoTitle: 'Visit 2 seas' }
//   ]);
//   // await knex('users').insert([
//   //   {
//   //     userId: 1,
//   //     firstName: 'Nazar',
//   //     lastName: 'Kopak',
//   //     email: 'nazik@com',
//   //     password: '12345',
//   //     role: 'user'
//   //   },
//   //   {
//   //     userId: 2,
//   //     firstName: 'Volodia',
//   //     lastName: 'Ruby',
//   //     email: 'volod@com',
//   //     password: '12345',
//   //     role: 'user'
//   //   },
//   //   {
//   //     userId: 3,
//   //     firstName: 'Andrew',
//   //     lastName: 'Dotnet',
//   //     email: 'andr@com',
//   //     password: '12345',
//   //     role: 'user'
//   //   }
//   // ]);
//   await knex('todoItems').insert([
//     {
//       todoItemId: 1,
//       todoId: 1,
//       userId: 1,
//       taskTitle: 'Take courses',
//       isCompleted: true
//     },
//     {
//       todoItemId: 2,
//       todoId: 2,
//       userId: 2,
//       taskTitle: 'Repair car',
//       isCompleted: true
//     },
//     {
//       todoItemId: 3,
//       todoId: 2,
//       userId: 2,
//       taskTitle: 'Book a house',
//       isCompleted: true
//     },
//     {
//       todoItemId: 4,
//       todoId: 3,
//       userId: 3,
//       taskTitle: 'Buy car parts',
//       isCompleted: true
//     },
//     {
//       todoItemId: 5,
//       todoId: 3,
//       userId: 3,
//       taskTitle: 'Book car service',
//       isCompleted: false
//     },
//     {
//       todoItemId: 6,
//       todoId: 1,
//       userId: 1,
//       taskTitle: 'Practice coding',
//       isCompleted: true
//     },
//     {
//       todoItemId: 7,
//       todoId: 1,
//       userId: 1,
//       taskTitle: 'Read documentation',
//       isCompleted: false
//     },
//     {
//       todoItemId: 8,
//       todoId: 3,
//       userId: 3,
//       taskTitle: 'Have enough money',
//       isCompleted: true
//     },
//     {
//       todoItemId: 9,
//       todoId: 4,
//       userId: 2,
//       taskTitle: 'Visit Black sea',
//       isCompleted: false
//     },
//     {
//       todoItemId: 10,
//       todoId: 4,
//       userId: 2,
//       taskTitle: 'Visit Azov sea',
//       isCompleted: false
//     }
//   ]);
// }
