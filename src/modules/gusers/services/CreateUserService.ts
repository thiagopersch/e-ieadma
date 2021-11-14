import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import User from '../infra/typeorm/entities/User';

import IHashProvider from '../providers/HashProvider/models/IHashProvider';
import IUsersRepository from '../repositories/IUsersRepository';

type CreateUserRequest = {
  NAME: string;
  EMAIL: string;
  PASSWORD: string;
  BAPTIZED_IN_WATER: boolean;
  BAPTIZED_DATE?: Date | undefined;
};

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository') private usersRepository: IUsersRepository,
    @inject('HashProvider') private hashProvider: IHashProvider,
  ) {}

  public async execute({
    NAME,
    EMAIL,
    PASSWORD,
    BAPTIZED_IN_WATER,
    BAPTIZED_DATE,
  }: CreateUserRequest): Promise<User | undefined> {
    const existsUserWithLogin = await this.usersRepository.findByLogin(EMAIL);
    if (existsUserWithLogin) {
      throw new AppError('Already an user with this email');
    }

    const hashedPassword = await this.hashProvider.generateHash(PASSWORD);

    const user = await this.usersRepository.create({
      NAME,
      EMAIL,
      PASSWORD: hashedPassword,
      BAPTIZED_IN_WATER,
      BAPTIZED_DATE,
    });

    return user;
  }
}

export default CreateUserService;
