import { IUser } from '../../models';

export class UserDao {
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

  async getAllUsers(): Promise<any> {
    const allUsers = await this.db('users');

    return allUsers;
  }

  async getUserById(userId: string): Promise<any> {
    const userById = await this.db('users').where('id', userId).returning('*');

    return userById;
  }

  async getUserByEmail(email: string): Promise<any> {
    const userByEmail = await this.db('users').where('email', email);

    return userByEmail;
  }

  async updateUser(userId: number, userObject: IUser): Promise<any> {
    const { firstName, lastName, email, password, role } = userObject;
    const updatedUser = await this.db('users')
      .update({
        firstName,
        lastName,
        email,
        password,
        role
      })
      .where('id', userId)
      .returning('*');

    return updatedUser;
  }

  // async changeUser(userId: number, userObject: IUser): Promise<any> {}

  async deleteUser(userId: number): Promise<any> {
    await this.db('todos').where('userId', userId).del();
    const deletedUser = await this.db('users')
      .where('id', userId)
      .del()
      .returning('*');

    return deletedUser;
  }
}
