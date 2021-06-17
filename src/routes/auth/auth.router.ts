import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json('Auth');
});

export const authRouter = router;
