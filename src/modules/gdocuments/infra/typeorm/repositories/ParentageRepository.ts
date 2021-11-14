import { getRepository, Repository } from 'typeorm';

import CreateParentageDTO from '@modules/gdocuments/dtos/CreateParentageDTO';

import IParentageRepository from '@modules/gdocuments/repositories/IParentageRepository';
import Parentage from '../entities/Parentage';

class ParentageRepository implements IParentageRepository {
  private ormRepository: Repository<Parentage>;

  constructor() {
    this.ormRepository = getRepository(Parentage);
  }

  public async create({
    NAME,
    GPARENTAGETYPE_ID,
  }: CreateParentageDTO): Promise<Parentage> {
    const parentage = this.ormRepository.create({ NAME, GPARENTAGETYPE_ID });
    await this.ormRepository.save(parentage);

    return parentage;
  }
}

export default ParentageRepository;
