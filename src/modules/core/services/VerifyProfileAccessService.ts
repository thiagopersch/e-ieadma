import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IAccessUsersModulesRepository from '../repositories/IAccessUsersModulesRepository';
import AccessUserModule from '../infra/typeorm/entities/AccessUserModule';

type VerifyProfileAccess = {
  MODULE: string;
  GACCESSLEVELS_ID: string;
};

@injectable()
class VerifyProfileAccessService {
  constructor(
    @inject('AccessUsersModulesRepository')
    private accessUsersModulesRepository: IAccessUsersModulesRepository,
  ) {}

  public async execute({
    GACCESSLEVELS_ID,
    MODULE,
  }: VerifyProfileAccess): Promise<AccessUserModule> {
    const accessModule = await this.accessUsersModulesRepository.findOne({
      GACCESSLEVELS_ID,
      GAPPMODULES_NAME: MODULE,
    });

    if (!accessModule) {
      throw new AppError('You dont have permission to access this module');
    }

    return accessModule;
  }
}

export default VerifyProfileAccessService;
