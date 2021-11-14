import { getRepository, Repository } from 'typeorm';

import CreateEBDDTO from '@modules/eEBD/dtos/CreateEBDDTO';
import EBD from '../entities/EBD';

class EBDRepository {
  private ormRepository: Repository<EBD>;

  constructor() {
    this.ormRepository = getRepository(EBD);
  }

  public async create({
    ETRIMESTRE_ID,
    DATE,
    START_TIME,
    FINAL_TIME,
  }: CreateEBDDTO): Promise<EBD> {
    const ebd = this.ormRepository.create({
      ETRIMESTRE_ID,
      DATE,
      START_TIME,
      FINAL_TIME,
    });
    await this.ormRepository.save(ebd);

    return ebd;
  }

  public async update(ebd: EBD): Promise<EBD> {
    await this.ormRepository.save(ebd);
    return ebd;
  }
}
export default EBDRepository;
