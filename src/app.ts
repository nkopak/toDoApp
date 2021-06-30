import * as express from 'express';
import * as dotenv from 'dotenv';
import { setup } from './diSetup';

setup();
import { adminRouter, authRouter, listRouter, userRouter } from './routes';

dotenv.config();

class App {
  app: express.Application = express();

  constructor() {
    this.app.use(express.json());
    this.mountRoutes();
  }

  mountRoutes(): void {
    this.app.use('/auth', authRouter);
    this.app.use('/admin', adminRouter);
    this.app.use('/lists', listRouter);
    this.app.use('/users', userRouter);
  }
}

export const app = new App().app;
