import {
  FindConditions,
  getRepository,
  In,
  Repository,
  WhereExpressionBuilder,
  ObjectLiteral,
} from 'typeorm';

import CreateAccessUsersModulesDTO from '@modules/core/dtos/CreateAccessUsersModules';
import FindAccessModuleDTO from '@modules/core/dtos/FindAccessModuleDTO';

import IAccessUsersModulesRepository from '@modules/core/repositories/IAccessUsersModulesRepository';
import AccessUserModule from '../entities/AccessUserModule';

type AndWhere = {
  condition: string;
  parameters?: ObjectLiteral;
};

class AccessUsersModulesRepository implements IAccessUsersModulesRepository {
  private ormRepository: Repository<AccessUserModule>;

  constructor() {
    this.ormRepository = getRepository(AccessUserModule);
  }

  private mountQuery({
    ID,
    GACCESSLEVELS_ID,
    GAPPMODULES_ID,
    GAPPMODULES_NAME,
    READ,
    WRITE,
  }: FindAccessModuleDTO) {
    const where: FindConditions<AccessUserModule> = {};
    const andWhere: AndWhere[] = [];

    if (ID) where.ID = ID;
    if (READ) where.READ = READ;
    if (WRITE) where.WRITE = WRITE;
    if (GACCESSLEVELS_ID) {
      if (Array.isArray(GACCESSLEVELS_ID)) {
        where.GACCESSLEVELS_ID = In(GACCESSLEVELS_ID);
      } else {
        where.GACCESSLEVELS_ID = GACCESSLEVELS_ID;
      }
    }
    if (GAPPMODULES_ID) {
      if (Array.isArray(GAPPMODULES_ID)) {
        where.GAPPMODULES_ID = In(GAPPMODULES_ID);
      } else {
        where.GAPPMODULES_ID = GAPPMODULES_ID;
      }
    }
    if (GAPPMODULES_NAME) {
      andWhere.push({
        condition: 'GAPPMODULES.NAME = :MODULENAME',
        parameters: { moduleName: GAPPMODULES_NAME },
      });
    }

    return {
      join: {
        alias: 'GACCESSUSERSMODULES',
        innerJoinAndSelect: {
          GAPPMODULES: 'GACCESSUSERSMODULES.GAPPMODULES',
        },
      },
      where: (qb: WhereExpressionBuilder) => {
        qb.where(where);

        andWhere.forEach(({ condition, parameters }) =>
          qb.andWhere(condition, parameters),
        );
      },
    };
  }

  public async findOne(
    filters: FindAccessModuleDTO,
  ): Promise<AccessUserModule | undefined> {
    const accessModule = await this.ormRepository.findOne(
      this.mountQuery(filters),
    );

    return accessModule;
  }

  public async findAll(
    filters: FindAccessModuleDTO,
  ): Promise<AccessUserModule[]> {
    const accessModules = await this.ormRepository.find(
      this.mountQuery(filters),
    );
    return accessModules;
  }

  public async create({
    GACCESSLEVELS_ID,
    GAPPMODULES_ID,
    READ,
    WRITE,
  }: CreateAccessUsersModulesDTO): Promise<AccessUserModule> {
    const accessModule = this.ormRepository.create({
      GACCESSLEVELS_ID,
      GAPPMODULES_ID,
      READ,
      WRITE,
    });
    await this.ormRepository.save(accessModule);

    return accessModule;
  }

  public async createMany(
    data: CreateAccessUsersModulesDTO[],
  ): Promise<AccessUserModule[]> {
    const accessModules = data.map(
      ({ GACCESSLEVELS_ID, GAPPMODULES_ID, READ, WRITE }) =>
        this.ormRepository.create({
          GACCESSLEVELS_ID,
          GAPPMODULES_ID,
          READ,
          WRITE,
        }),
    );

    await this.ormRepository.save(accessModules);
    return accessModules;
  }

  public async update(
    accessUsersModule: AccessUserModule,
  ): Promise<AccessUserModule> {
    await this.ormRepository.save(accessUsersModule);
    return accessUsersModule;
  }

  public async updateMany(
    accessUsersModule: AccessUserModule[],
  ): Promise<AccessUserModule[]> {
    await this.ormRepository.save(accessUsersModule);
    return accessUsersModule;
  }

  public async delete(accessUsersModule: AccessUserModule): Promise<void> {
    await this.ormRepository.remove(accessUsersModule);
  }
}

export default AccessUsersModulesRepository;
