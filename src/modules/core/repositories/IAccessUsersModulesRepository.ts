import CreateAccessUsersModulesDTO from '../dtos/CreateAccessUsersModules';
import FindAccessModuleDTO from '../dtos/FindAccessModuleDTO';

import AccessUserModule from '../infra/typeorm/entities/AccessUserModule';

export default interface IAccessUsersModulesRepository {
  findOne: (
    filters: FindAccessModuleDTO,
  ) => Promise<AccessUserModule | undefined>;
  findAll: (filters: FindAccessModuleDTO) => Promise<AccessUserModule[]>;
  create: (data: CreateAccessUsersModulesDTO) => Promise<AccessUserModule>;
  createMany: (
    data: CreateAccessUsersModulesDTO[],
  ) => Promise<AccessUserModule[]>;
  update: (accessModule: AccessUserModule) => Promise<AccessUserModule>;
  updateMany: (accessModule: AccessUserModule[]) => Promise<AccessUserModule[]>;
  delete: (accessModule: AccessUserModule) => Promise<void>;
}
