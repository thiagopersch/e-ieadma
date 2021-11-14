import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import User from '../infra/typeorm/entities/User';
import IUsersRepository from '../repositories/IUsersRepository';

type FindUserRequest = {
  GUSERS_ID: string;
};

@injectable()
class FindUserService {
  constructor(
    @inject('UsersRepository') private usersRepository: IUsersRepository,
  ) {}

  public async execute({ GUSERS_ID }: FindUserRequest): Promise<User> {
    const user = await this.usersRepository.findById(GUSERS_ID);

    if (!user) {
      throw new AppError('User not exist');
    }

    return user;
  }
}

export default FindUserService;
