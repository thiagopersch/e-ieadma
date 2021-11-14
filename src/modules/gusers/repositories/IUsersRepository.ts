import CountResultDTO from '../dtos/CountResultDTO';
import CreateUserDTO from '../dtos/CreateUserDTO';

import User from '../infra/typeorm/entities/User';

export default interface IUsersRepository {
  findByLogin: (EMAIL: string) => Promise<User | undefined>;
  findById: (GUSERS_ID: string) => Promise<User | undefined>;
  findAll: () => Promise<User[]>;
  count: () => Promise<CountResultDTO>;
  create: (data: CreateUserDTO) => Promise<User>;
  update: (user: User) => Promise<User>;
  delete: (user: User) => Promise<void>;
}
