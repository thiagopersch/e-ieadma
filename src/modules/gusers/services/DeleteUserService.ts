/* import { inject, injectable } from 'tsyringe';

import IEmployeesRepository from '@modules/employees/repositories/IEmployeesRepository';

import AppError from '@shared/errors/AppError';

import IUsersRepository from '../repositories/IUsersRepository';

type DeleteUserRequest = {
  USER_ID: string;
  AUTH_USER_ID: string;
};

@injectable()
class DeleteUserService {
  constructor(
    @inject('UsersRepository') private usersRepository: IUsersRepository,
    @inject('EmployeesRepository') private employeesRepository: IC,
  ) {}

  public async execute({
    USER_ID,
    AUTH_USER_ID,
  }: DeleteUserRequest): Promise<void> {
    if (USER_ID === AUTH_USER_ID) {
      throw new AppError('You cannot delete your own user.');
    }

    const user = await this.usersRepository.findById(USER_ID);
    if (!user) {
      throw new AppError('User not found');
    }

    const employee = await this.employeesRepository.findOne({
      USER_ID: user.ID,
    });
    if (employee) {
      throw new AppError('This user is linked with an member.');
    }

    await this.usersRepository.delete(user);
  }
}

export default DeleteUserService;
 */
