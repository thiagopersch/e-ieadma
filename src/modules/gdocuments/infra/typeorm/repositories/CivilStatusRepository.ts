import { getRepository, Repository } from 'typeorm';

import CreateCivilStatusDTO from '@modules/gdocuments/dtos/CreateCivilStatusDTO';

import ICivilStatusRepository from '@modules/gdocuments/repositories/ICivilStatusRepository';
import CivilStatus from '../entities/CivilStatus';

class CivilStatisRepository implements ICivilStatusRepository {
  private ormRepository: Repository<CivilStatus>;

  constructor() {
    this.ormRepository = getRepository(CivilStatus);
  }

  public async create({ NAME }: CreateCivilStatusDTO): Promise<CivilStatus> {
    const civilStatus = this.ormRepository.create({ NAME });
    await this.ormRepository.save(civilStatus);

    return civilStatus;
  }
}

export default CivilStatisRepository;
