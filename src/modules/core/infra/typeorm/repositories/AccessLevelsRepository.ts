import { FindConditions, getRepository, Repository } from 'typeorm';

import CreateAccessLevelDTO from '@modules/core/dtos/CreateAccessLevelDTO';
import FindAccessLevelDTO from '@modules/core/dtos/FindAccessLevelDTO';
import IAccessLevelsRepository from '@modules/core/repositories/IAccessLevelsRepository';
import AccessLevel from '../entities/AccessLevel';

class AccessLevelsRepository implements IAccessLevelsRepository {
  private ormRepository: Repository<AccessLevel>;

  constructor() {
    this.ormRepository = getRepository(AccessLevel);
  }

  public async findOne({
    ID,
    NAME,
    CODE,
  }: FindAccessLevelDTO): Promise<AccessLevel | undefined> {
    const where: FindConditions<AccessLevel> = {};

    if (ID) where.ID = ID;
    if (NAME) where.NAME = NAME;
    if (CODE) where.CODE = CODE;

    const accessLevel = await this.ormRepository.findOne({ where });
    return accessLevel;
  }

  public async findAll({
    ID,
    NAME,
    CODE,
  }: FindAccessLevelDTO): Promise<AccessLevel[]> {
    const where: FindConditions<AccessLevel> = {};

    if (ID) where.ID = ID;
    if (NAME) where.NAME = NAME;
    if (CODE) where.CODE = CODE;

    const accessLevel = await this.ormRepository.find({ where });
    return accessLevel;
  }

  public async create({
    NAME,
    CODE,
    ONLYON,
  }: CreateAccessLevelDTO): Promise<AccessLevel> {
    const accessLevel = this.ormRepository.create({
      NAME,
      CODE,
      ONLYON,
    });

    await this.ormRepository.save(accessLevel);

    return accessLevel;
  }

  public async delete(accessLevel: AccessLevel): Promise<void> {
    await this.ormRepository.remove(accessLevel);
  }
}

export default AccessLevelsRepository;
