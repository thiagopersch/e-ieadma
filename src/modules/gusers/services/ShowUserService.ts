import { inject, injectable } from 'tsyringe';

import User from '../infra/typeorm/entities/User';
import IUsersRepository from '../repositories/IUsersRepository';

type ShowUserRequest = {
  GUSERS_ID: string;
};

@injectable()
class ShowUserService {
  constructor(
    @inject('UsersRepository') private usersRepository: IUsersRepository,
  ) {}

  public async execute({ GUSERS_ID }: ShowUserRequest): Promise<User> {
    const user = await this.usersRepository.findById(GUSERS_ID);
    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }
}

export default ShowUserService;
