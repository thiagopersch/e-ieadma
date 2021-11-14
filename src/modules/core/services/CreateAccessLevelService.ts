import { inject, injectable } from 'tsyringe';

import BranchType from '@shared/infra/typeorm/enums/Branch';
import AccessLevel from '../infra/typeorm/entities/AccessLevel';

import IAccessLevelsRepository from '../repositories/IAccessLevelsRepository';
import IAppModulesRepository from '../repositories/IAppModulesRepository';

import CreateAccessUsersModuleService from './CreateAccessUsersModuleService';

type CreateAccessLevelRequest = {
  NAME: string;
  CODE: string;
  ONLYON: BranchType;
};

@injectable()
class CreateAccessLevelService {
  constructor(
    @inject('AccessLevelsRepository')
    private accessLevelsRepository: IAccessLevelsRepository,
    @inject('AppModulesRepository')
    private appModulesRepository: IAppModulesRepository,
    private createAccessUsersModules: CreateAccessUsersModuleService,
  ) {}

  public async execute({
    NAME,
    CODE,
    ONLYON,
  }: CreateAccessLevelRequest): Promise<AccessLevel> {
    const accessLevel = await this.accessLevelsRepository.create({
      NAME,
      CODE,
      ONLYON,
    });

    const modules = await this.appModulesRepository.findAll();

    const accessModulesObj = modules.map(({ ID }) => ({
      GACCESSLEVELS_ID: accessLevel.ID,
      GAPPMODULES_ID: ID,
      READ: accessLevel.CODE === 'ADMIN',
      WRITE: accessLevel.CODE === 'ADMIN',
    }));

    await this.createAccessUsersModules.execute(accessModulesObj);

    return accessLevel;
  }
}

export default CreateAccessLevelService;
