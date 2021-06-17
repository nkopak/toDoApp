import { Router } from 'express';
import db from '../../data/db';

const router = Router();

router.get('/', async (req, res) => {
  const user = await db('user').column('first_name');
  res.json({ user });
});

router.post('/', (req, res) => {
  res.json('User is created');
});

export const userRouter = router;
