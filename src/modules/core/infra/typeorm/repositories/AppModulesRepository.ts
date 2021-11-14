import { getRepository, Raw, Repository } from 'typeorm';

import IAppModulesRepository from '@modules/core/repositories/IAppModulesRepository';

import CreateAppModuleDTO from '@modules/core/dtos/CreateAppModuleDTO';

import AppModule from '../entities/AppModule';

class AppModulesRepository implements IAppModulesRepository {
  private ormRepository: Repository<AppModule>;

  constructor() {
    this.ormRepository = getRepository(AppModule);
  }

  public async findById(ID: string): Promise<AppModule | undefined> {
    const appModule = await this.ormRepository.findOne(ID);
    return appModule;
  }

  public async findByName(NAME: string): Promise<AppModule | undefined> {
    const appModule = await this.ormRepository.findOne({
      where: {
        NAME: Raw(NameField => `${NameField} ILIKE '${NAME}'`),
      },
    });

    return appModule;
  }

  public async findAll(): Promise<AppModule[]> {
    const appModules = await this.ormRepository.find();
    return appModules;
  }

  public async create({
    NAME,
    DESCRIPTION,
  }: CreateAppModuleDTO): Promise<AppModule> {
    const appModule = this.ormRepository.create({ NAME, DESCRIPTION });
    await this.ormRepository.save(appModule);

    return appModule;
  }
}

export default AppModulesRepository;
