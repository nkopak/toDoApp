import { IUser } from '../../models';
import { hashPassword } from '../../helpers';

export class UserService {
  userDao: any;
  constructor({ userDao }: { userDao: any }) {
    this.userDao = userDao;

    this.createUser = this.createUser.bind(this);
    this.getAllUsers = this.getAllUsers.bind(this);
    this.getUserById = this.getUserById.bind(this);
    this.getUserByEmail = this.getUserByEmail.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  async createUser(userObject: IUser): Promise<any> {
    const { password } = userObject;

    const hashedPassword = await hashPassword(password);
    // console.log(hashedPassword);

    const response = await this.userDao.createUser(userObject, hashedPassword);

    return response;
  }

  async getAllUsers(): Promise<any> {
    const response = await this.userDao.getAllUsers();

    return response;
  }

  async getUserById(userId: string): Promise<void> {
    const response = await this.userDao.getUserById(userId);

    return response;
  }

  async getUserByEmail(email: string): Promise<void> {
    const response = await this.userDao.getUserByEmail(email);

    return response;
  }

  async updateUser(userId: number, userObject: IUser): Promise<any> {
    const { password } = userObject;

    const hashedPassword = await hashPassword(password);

    const response = await this.userDao.updateUser(userId, {
      ...userObject,
      password: hashedPassword
    });

    return response;
  }

  async deleteUser(userId: number): Promise<any> {
    const response = await this.userDao.deleteUser(userId);

    return response;
  }
}

// export const userService = new UserService();
