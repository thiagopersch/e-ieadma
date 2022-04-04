import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import AppModule from '../infra/typeorm/entities/AppModule';

import IAccessLevelsRepository from '../repositories/IAccessLevelsRepository';
import IAppModulesRepository from '../repositories/IAppModulesRepository';

import CreateAccessUsersModuleService from './CreateAccessUsersModuleService';

type CreateAppModuleRequest = {
  NAME: string;
  DESCRIPTION: string;
};

@injectable()
class CreateAppModuleService {
  constructor(
    @inject('AppModulesRepository')
    private appModulesRepository: IAppModulesRepository,
    @inject('AccessLevelsRepository')
    private accessLevelsRepository: IAccessLevelsRepository,
    private createAccessModules: CreateAccessUsersModuleService,
  ) {}

  public async execute({
    NAME,
    DESCRIPTION,
  }: CreateAppModuleRequest): Promise<AppModule> {
    const existAppModule = await this.appModulesRepository.findByName(NAME);
    if (existAppModule) {
      throw new AppError('Already exists an application module with this name');
    }

    const appModule = await this.appModulesRepository.create({
      NAME,
      DESCRIPTION,
    });

    const accessLevels = await this.accessLevelsRepository.findAll({});

    const accessModulesObj = accessLevels.map(({ ID, CODE }) => ({
      GACCESSLEVELS_ID: ID,
      GAPPMODULES_ID: appModule.ID,
      READ: CODE === 'ADMINISTRADOR',
      WRITE: CODE === 'ADMINISTRADOR',
    }));
    await this.createAccessModules.execute(accessModulesObj);

    return appModule;
  }
}

export default CreateAppModuleService;
