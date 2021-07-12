import { IUser } from '../../models';
import { hashPassword } from '../../helpers';

export class AuthService {
  userDao: any;
  constructor({ userDao }: { userDao: any }) {
    this.userDao = userDao;

    this.createUser = this.createUser.bind(this);
  }

  async createUser(userObject: IUser): Promise<any> {
    const { password } = userObject;

    const hashedPassword = await hashPassword(password);
    // console.log(hashedPassword);

    const response = await this.userDao.createUser(userObject, hashedPassword);

    return response;
  }
}
