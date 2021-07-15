import { IUser } from '../../models';
import { hashPassword } from '../../helpers';

export class AuthService {
  authDao: any;
  constructor({ authDao }: { authDao: any }) {
    this.authDao = authDao;

    this.createUser = this.createUser.bind(this);
    this.getUserByEmail = this.getUserByEmail.bind(this);
  }

  async createUser(userObject: IUser): Promise<any> {
    const { password } = userObject;

    const hashedPassword = await hashPassword(password);
    // console.log(hashedPassword);

    const response = await this.authDao.createUser(userObject, hashedPassword);

    return response;
  }

  async getUserByEmail(email: string): Promise<void> {
    const response = await this.authDao.getUserByEmail(email);

    return response;
  }
}
