import { inject, injectable } from 'tsyringe';

import AccessUserModule from '../infra/typeorm/entities/AccessUserModule';
import IAccessUsersModulesRepository from '../repositories/IAccessUsersModulesRepository';

type ListAccessModuleRequest = {
  GACCESSLEVELS_ID: string;
};

@injectable()
class ListAccessModulesService {
  constructor(
    @inject('AccessUsersModulesRepository')
    private accessModulesRepository: IAccessUsersModulesRepository,
  ) {}

  public async execute({
    GACCESSLEVELS_ID,
  }: ListAccessModuleRequest): Promise<AccessUserModule[]> {
    const accessModules = await this.accessModulesRepository.findAll({
      GACCESSLEVELS_ID,
    });

    return accessModules;
  }
}

export default ListAccessModulesService;
