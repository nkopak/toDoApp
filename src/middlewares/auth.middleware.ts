import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as jwt from 'jsonwebtoken';

import { errorMessage } from '../messages';
import { createUserValidator } from '../validators';
import { IRequestExtended } from '../models';

export class AuthMiddleware {
  authService: any;
  constructor({ authService }: { authService: any }) {
    this.authService = authService;

    this.isUserValid = this.isUserValid.bind(this);
    this.isUserAlreadyExist = this.isUserAlreadyExist.bind(this);
    this.token = this.token.bind(this);
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
      // throw new Error();
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

      const userRegistered = await this.authService.getUserByEmail(email);

      if (userRegistered.length) {
        res.status(StatusCodes.CONFLICT).json(errorMessage.USER_ALREADY_EXIST);
      }

      next();
    } catch (error) {
      console.log(error);
    }
  }

  async token(
    req: IRequestExtended,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const token = await req.headers.authorization?.split(' ')[1];

      if (!token) {
        res
          .status(StatusCodes.UNAUTHORIZED)
          .json(errorMessage.USER_UNAUTHORIZED);
        throw new Error(errorMessage.USER_UNAUTHORIZED);
      }

      const decodedData = jwt.verify(token, 'JWT_SECRET');
      console.log(decodedData);

      req.user = decodedData;

      next();
    } catch (error) {
      console.log(error);
    }
  }

  async isAdmin(
    req: IRequestExtended,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const { role } = req.user;
      console.log(role);

      if (role !== 'admin') {
        await res.json(errorMessage.ACCESS_DENIED);
      }

      next();
    } catch (error) {
      console.log(error);
    }
  }
}
