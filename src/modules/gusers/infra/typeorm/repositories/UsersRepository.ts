import { getRepository, Repository } from 'typeorm';

import CreateUserDTO from '@modules/gusers/dtos/CreateUserDTO';
import CountResultDTO from '@modules/gusers/dtos/CountResultDTO';

import IUsersRepository from '@modules/gusers/repositories/IUsersRepository';
import User from '../entities/User';

class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async findByLogin(EMAIL: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({
      EMAIL,
    });
    return user;
  }

  public async findById(GUSERS_ID: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne(GUSERS_ID);
    return user;
  }

  public async findAll(): Promise<User[]> {
    const users = await this.ormRepository.find();
    return users;
  }

  public async count(): Promise<CountResultDTO> {
    const count = await this.ormRepository.count();
    return { count };
  }

  public async create({
    NAME,
    EMAIL,
    PASSWORD,
    BAPTIZED_IN_WATER,
    BAPTIZED_DATE,
  }: CreateUserDTO): Promise<User> {
    const user = this.ormRepository.create({
      NAME,
      EMAIL,
      PASSWORD,
      BAPTIZED_IN_WATER,
      BAPTIZED_DATE,
    });
    await this.ormRepository.save(user);

    return user;
  }

  public async update(user: User): Promise<User> {
    await this.ormRepository.save(user);
    return user;
  }

  public async delete(user: User): Promise<void> {
    await this.ormRepository.softRemove(user);
  }
}

export default UsersRepository;
