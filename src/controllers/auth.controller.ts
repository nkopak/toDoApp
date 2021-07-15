import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { successMessage } from '../messages';
import { comparePassword, tokenizer } from '../helpers';
export class AuthController {
  authService: any;
  constructor({ authService }: { authService: any }) {
    this.authService = authService;

    this.register = this.register.bind(this);
    // this.confirmUser = this.confirmUser.bind(this);
    this.login = this.login.bind(this);
    this.roles = this.roles.bind(this);

    // this.createUser = this.createUser.bind(this);
  }

  async register(req: Request, res: Response): Promise<void> {
    try {
      const newUserObject = req.body;

      await this.authService.createUser(newUserObject);

      console.log(newUserObject);

      // const tokens = tokenizer();

      // console.log(tokens);

      res.status(StatusCodes.CREATED).json(successMessage.USER_CREATED);
    } catch (error) {
      console.error(error);
    }
  }

  async login(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;

      const userByEmail = await this.authService.getUserByEmail(email);

      console.log(userByEmail);

      if (userByEmail.length === 0) {
        throw new Error(`User with email ${email} not found.`);
      }

      const isPassEqual = await comparePassword(
        password,
        userByEmail[0].password
      );

      if (!isPassEqual) {
        // console.log('=============');
        // console.log('PASSWORD IS INCORRECT');
        // console.log('=============');

        throw new Error('PASSWORD IS INCORRECT');
      }

      // console.log(userByEmail[0].id);
      // console.log(userByEmail[0].role);

      const tokens = tokenizer(userByEmail[0].id, userByEmail[0].role);

      console.log(tokens);

      res.status(StatusCodes.OK).json('User logged');
    } catch (error) {
      console.error(error);
    }
  }

  async roles(req: Request, res: Response): Promise<void> {
    try {
      await res.json('Role test');
    } catch (error) {
      console.error(error);
    }
  }

  // confirmUser(req: Request, res: Response) {
  //   res.end();
  // }

  // async createUser(req: Request, res: Response): Promise<void> {
  //   try {
  //     const newUserObject = req.body;

  //     await this.authService.createUser(newUserObject);

  //     // console.log(newUserObject);

  //     res.status(StatusCodes.CREATED).json(successMessage.USER_CREATED);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // async getUserByEmail(req: Request, res: Response): Promise<void> {
  //   try {
  //     const { email } = req.query;

  //     const response = await this.authService.getUserByEmail(email);

  //     res.status(StatusCodes.OK).json(response);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
}
