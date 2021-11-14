import { getRepository, Repository } from 'typeorm';

import CreateParentageTypeDTO from '@modules/gdocuments/dtos/CreateParentageTypeDTO';

import IParentageTypeRepository from '@modules/gdocuments/repositories/IParentageTypeRepository';
import ParentageType from '../entities/ParentageType';

class ParentageTypeRepository implements IParentageTypeRepository {
  private ormRepository: Repository<ParentageType>;

  constructor() {
    this.ormRepository = getRepository(ParentageType);
  }

  public async create({
    NAME,
  }: CreateParentageTypeDTO): Promise<ParentageType> {
    const parentageType = this.ormRepository.create({ NAME });
    await this.ormRepository.save(parentageType);

    return parentageType;
  }
}

export default ParentageTypeRepository;
