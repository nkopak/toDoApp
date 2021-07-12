import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
// import * as Joi from 'joi';

// import { IUser } from '../models';
import { successMessage } from '../messages';
import { createUserValidator } from '../validators';

export class AuthController {
  authService: any;
  constructor({ authService }: { authService: any }) {
    this.authService = authService;

    this.createUser = this.createUser.bind(this);
  }

  async createUser(req: Request, res: Response): Promise<void> {
    try {
      const newUserObject = req.body;

      const validation = createUserValidator.validate(req.body);

      console.log(validation);

      // if (error) {
      //   return next(new Error(error.details[0].message));
      // }

      await this.authService.createUser(newUserObject);

      // console.log(newUserObject);

      res.status(StatusCodes.CREATED).json(successMessage.USER_CREATED);
    } catch (error) {
      console.error(error);
    }
  }
}
