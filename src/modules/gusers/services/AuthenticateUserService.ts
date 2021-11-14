import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import User from '../infra/typeorm/entities/User';

import IHashProvider from '../providers/HashProvider/models/IHashProvider';
import IUsersRepository from '../repositories/IUsersRepository';

type AuthenticateUserRequest = {
  EMAIL: string;
  PASSWORD: string;
};

@injectable()
class AuthenticateUserService {
  constructor(
    @inject('UsersRepository') private usersRepository: IUsersRepository,
    @inject('HashProvider') private hashProvider: IHashProvider,
  ) {}

  public async execute({
    EMAIL,
    PASSWORD,
  }: AuthenticateUserRequest): Promise<User> {
    const user = await this.usersRepository.findByLogin(EMAIL);

    if (!user) {
      throw new AppError('Incorrect email/password', 401);
    }

    const passwordMatched = await this.hashProvider.compareHash(
      PASSWORD,
      user.PASSWORD,
    );

    if (!passwordMatched) {
      throw new AppError('Incorrect email/password', 401);
    }

    return user;
  }
}

export default AuthenticateUserService;
