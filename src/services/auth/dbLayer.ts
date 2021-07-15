import { IUser } from '../../models';

export class AuthDao {
  db: any;
  constructor({ db }: { db: any }) {
    this.db = db;
  }

  async createUser(userObject: IUser, hashedPassword: string): Promise<any> {
    const { firstName, lastName, email, role } = userObject;
    const password = hashedPassword;
    const newUser = await this.db('users').insert({
      firstName,
      lastName,
      email,
      password,
      role
    });

    return newUser;
  }

  async getUserByEmail(email: string): Promise<any> {
    const userByEmail = await this.db('users').where('email', email);

    return userByEmail;
  }
}
