import { inject, injectable } from 'tsyringe';

import Module from '../infra/typeorm/entities/Module';

import IModulesRepository from '../repositories/IModulesRepository';

type CreateModuleRequest = {
  SIGLA: string;
  NAME: string;
  DESCRIPTION: string;
};

@injectable()
class CreateModuleService {
  constructor(
    @inject('ModulesRepository') private modulesRepository: IModulesRepository,
  ) {}

  public async execute({
    SIGLA,
    NAME,
    DESCRIPTION,
  }: CreateModuleRequest): Promise<Module> {
    const module = await this.modulesRepository.create({
      SIGLA,
      NAME,
      DESCRIPTION,
    });

    return module;
  }
}

export default CreateModuleService;
