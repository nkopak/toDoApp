import express from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('To Do App');
});

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
