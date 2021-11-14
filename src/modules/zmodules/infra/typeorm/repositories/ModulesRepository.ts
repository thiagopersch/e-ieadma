import { getRepository, Repository } from 'typeorm';

import IModulesRepository from '@modules/zmodules/repositories/IModulesRepository';
import CreateModulesDTO from '@modules/zmodules/dtos/CreateModulesDTO';

import Module from '../entities/Module';

class ModulesRepository implements IModulesRepository {
  private ormRepository: Repository<Module>;

  constructor() {
    this.ormRepository = getRepository(Module);
  }

  public async create({
    SIGLA,
    NAME,
    DESCRIPTION,
  }: CreateModulesDTO): Promise<Module> {
    const module = this.ormRepository.create({
      SIGLA,
      NAME,
      DESCRIPTION,
    });
    await this.ormRepository.save(module);

    return module;
  }
}

export default ModulesRepository;
