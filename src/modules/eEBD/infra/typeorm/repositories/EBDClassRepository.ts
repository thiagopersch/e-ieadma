import { getRepository, Repository } from 'typeorm';

import CreateEBDClassDTO from '@modules/eEBD/dtos/CreateEBDClassDTO';
import EBDClass from '../entities/EBDClass';

class EBDClassRepository {
  private ormRepository: Repository<EBDClass>;

  constructor() {
    this.ormRepository = getRepository(EBDClass);
  }

  public async create({
    ECLASS_ID,
    EEBD_ID,
  }: CreateEBDClassDTO): Promise<EBDClass> {
    const ebdClass = this.ormRepository.create({
      ECLASS_ID,
      EEBD_ID,
    });
    await this.ormRepository.save(ebdClass);

    return ebdClass;
  }

  public async update(ebdClass: EBDClass): Promise<EBDClass> {
    await this.ormRepository.save(ebdClass);
    return ebdClass;
  }
}

export default EBDClassRepository;
