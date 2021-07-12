import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { errorMessage } from '../messages';
import { createUserValidator } from '../validators';

export class UserMiddleware {
  userService: any;
  constructor({ userService }: { userService: any }) {
    this.userService = userService;

    this.isUserValid = this.isUserValid.bind(this);
    this.isUserAlreadyExist = this.isUserAlreadyExist.bind(this);
  }

  async isUserValid(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    const { error } = await createUserValidator.validate(req.body);

    if (error) {
      res
        .status(StatusCodes.CONFLICT)
        .json(errorMessage.FAILED_TO_MATCH_PATTERN);
      throw new Error();
    }

    next();
  }

  async isUserAlreadyExist(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const { email } = req.body;

      const userRegistered = await this.userService.getUserByEmail(email);
      console.log('Middleware works!!!');
      console.log('==================');
      console.log(userRegistered);
      console.log('==================');

      if (userRegistered.length) {
        res.status(StatusCodes.CONFLICT).json(errorMessage.USER_ALREADY_EXIST);
        // throw new Error();
      }

      next();
    } catch (error) {
      console.log(error);
    }
  }
}
