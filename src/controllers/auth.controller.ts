import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { errorMessage } from '../messages';
import { comparePassword, tokenizer } from '../helpers';
export class AuthController {
  authService: any;
  constructor({ authService }: { authService: any }) {
    this.authService = authService;

    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
    this.roles = this.roles.bind(this);
  }

  async register(req: Request, res: Response): Promise<void> {
    try {
      const newUserObject = req.body;

      const response = await this.authService.createUser(newUserObject);

      // console.log(response);

      const tokens = tokenizer(
        response[0].id,
        response[0].firstName,
        response[0].role
      );

      console.log(tokens);

      res.json({ auth: true, tokens, response });

      // res.status(StatusCodes.CREATED).json(successMessage.USER_CREATED);
    } catch (error) {
      console.error(error);
    }
  }

  async login(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;

      const userByEmail = await this.authService.getUserByEmail(email);

      if (userByEmail.length === 0) {
        res
          .status(StatusCodes.UNAUTHORIZED)
          .send({
            message: errorMessage.INCORRECT_EMAIL_OR_PASSWORD,
            auth: false
          })
          .json(errorMessage.INCORRECT_EMAIL_OR_PASSWORD);
        throw new Error(errorMessage.INCORRECT_EMAIL_OR_PASSWORD);
      }

      const isPassEqual = await comparePassword(
        password,
        userByEmail[0].password
      );

      if (!isPassEqual) {
        res
          .status(StatusCodes.UNAUTHORIZED)
          .send({
            message: errorMessage.INCORRECT_EMAIL_OR_PASSWORD,
            auth: false
          })
          .json(errorMessage.INCORRECT_EMAIL_OR_PASSWORD);
        throw new Error(errorMessage.INCORRECT_EMAIL_OR_PASSWORD);
      }

      const tokens = tokenizer(
        userByEmail[0].id,
        userByEmail[0].firstName,
        userByEmail[0].role
      );

      console.log(tokens);

      res.json({ auth: true, tokens, userByEmail });

      // res
      //   .send(userByEmail)
      //   .status(StatusCodes.OK)
      //   .json(successMessage.USER_LOGGED);
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
}
