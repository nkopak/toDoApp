import * as express from 'express';
import * as dotenv from 'dotenv';
import * as cors from 'cors';
import { setup } from './diSetup';
import * as swaggerUI from 'swagger-ui-express';
import * as swaggerDoc from './docs/swagger.json';

setup();
import { adminRouter, authRouter, userRouter } from './routes';

dotenv.config();

class App {
  app: express.Application = express();

  constructor() {
    this.app.use(express.json());
    this.app.use(
      cors({
        origin: 'http://localhost:3000'
      })
    );
    this.mountRoutes();
  }

  mountRoutes(): void {
    this.app.use('/auth', authRouter);
    this.app.use('/admin', adminRouter);
    // this.app.use('/lists', listRouter);
    this.app.use('/users', userRouter);

    this.app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));
  }
}

export const app = new App().app;
