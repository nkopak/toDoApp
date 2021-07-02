import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { IUser } from '../models';
import { successMessage } from '../messages';

export class UserController {
  userService: any;
  constructor({ userService }: { userService: any }) {
    this.userService = userService;

    this.createUser = this.createUser.bind(this);
    this.getAllUsers = this.getAllUsers.bind(this);
    this.getUserById = this.getUserById.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  async createUser(req: Request, res: Response): Promise<void> {
    try {
      const newUserObject = req.body;

      await this.userService.createUser(newUserObject);

      console.log(newUserObject);

      res.status(StatusCodes.CREATED).json(successMessage.USER_CREATED);
    } catch (error) {
      console.error(error);
    }
  }

  async getAllUsers(req: Request, res: Response): Promise<void> {
    try {
      const allUsers = await this.userService.getAllUsers();

      res.status(StatusCodes.OK).json(allUsers);
    } catch (error) {
      console.error(error);
    }
  }

  async getUserById(req: Request, res: Response): Promise<void> {
    try {
      const { userId } = req.params;

      const userById = await this.userService.getUserById(userId);

      res.status(StatusCodes.OK).json(userById);
    } catch (error) {
      console.error(error);
    }
  }

  async updateUser(req: Request, res: Response): Promise<void> {
    try {
      const { userId } = req.params;
      const userObject: IUser = req.body;

      await this.userService.updateUser(userId, userObject);

      // console.log(userObject);
      // console.log(userId);

      res.status(StatusCodes.OK).json(successMessage.USER_UPDATED);
    } catch (error) {
      console.error(error);
    }
  }

  async deleteUser(req: Request, res: Response): Promise<void> {
    try {
      const { userId } = req.params;

      await this.userService.deleteUser(userId);

      res.status(StatusCodes.OK).json(successMessage.USER_DELETED);
    } catch (error) {
      console.error(error);
    }
  }
}

// export const userController = new UserController();
