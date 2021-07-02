import { IUser } from '../../models';

export class UserService {
  userDao: any;
  constructor({ userDao }: { userDao: any }) {
    this.userDao = userDao;

    this.createUser = this.createUser.bind(this);
    this.getAllUsers = this.getAllUsers.bind(this);
    this.getUserById = this.getUserById.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  async createUser(userObject: IUser): Promise<any> {
    const response = await this.userDao.createUser(userObject);

    return response;
  }

  async getAllUsers(): Promise<any> {
    const response = await this.userDao.getAllUsers();

    return response;
  }

  async getUserById(userId: number): Promise<void> {
    const response = await this.userDao.getUserById(userId);

    return response;
  }

  async updateUser(userId: number, userObject: IUser): Promise<any> {
    const response = await this.userDao.updateUser(userId, userObject);

    return response;
  }

  async deleteUser(userId: number): Promise<any> {
    const response = await this.userDao.deleteUser(userId);

    return response;
  }
}

// export const userService = new UserService();
