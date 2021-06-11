import express from 'express';
import dotenv from 'dotenv';
import db from './data/db';

const app = express();
dotenv.config();

const port = process.env.PORT;

app.get('/todo', async (req, res) => {
  const todos = await db('todo');
  res.json({ todos });
});

app.get('/user', async (req, res) => {
  const user = await db('user');
  res.json({ user });
});

app.listen(port, () => {
  console.log(`App listening on ${port}`);
  // console.log(process.env.PG_PASS);
});
