import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

import User from '../infra/typeorm/entities/User';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';
import IUsersRepository from '../repositories/IUsersRepository';

type ChangePasswordRequest = {
  GUSER_ID: string;
  AUTHENTICATED_USER: string;
  PASSWORD: string;
};

@injectable()
class ChangePasswordService {
  constructor(
    @inject('UsersRepository') private usersRepository: IUsersRepository,
    @inject('HashProvider') private hashProvider: IHashProvider,
  ) {}

  public async execute({
    GUSER_ID,
    AUTHENTICATED_USER,
    PASSWORD,
  }: ChangePasswordRequest): Promise<User> {
    if (AUTHENTICATED_USER !== GUSER_ID) {
      throw new AppError("You can't change the password of another user");
    }

    const user = await this.usersRepository.findById(GUSER_ID);
    if (!user) {
      throw new AppError('User not found');
    }
    if (!user.CHANGE_PASSWORD) {
      throw new AppError('Password not allowed to change');
    }

    user.PASSWORD = await this.hashProvider.generateHash(PASSWORD);
    user.CHANGE_PASSWORD = false;

    return this.usersRepository.update(user);
  }
}

export default ChangePasswordService;
