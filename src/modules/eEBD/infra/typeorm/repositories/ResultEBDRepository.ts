import { getRepository, Repository } from 'typeorm';

import IResultEBDRepository from '@modules/eEBD/repositories/IResultEBDRepository';
import CreateResultEBDDTO from '@modules/eEBD/dtos/CreateResultEBDDTO';
import ResultEBD from '../entities/ResultEBD';

class ResultEBDRepository implements IResultEBDRepository {
  private ormRepository: Repository<ResultEBD>;

  constructor() {
    this.ormRepository = getRepository(ResultEBD);
  }

  public async findAll(): Promise<ResultEBD[]> {
    const resultEBD = await this.ormRepository.find();
    return resultEBD;
  }

  public async create({
    GUSERS_ID,
    EEBD_ID,
    ECLASS_ID,
    DATE,
    BIBLES_TOTAL,
    MAGAZINES_TOTAL,
    OFFER_TOTAL,
    PERCENTAGE_TOTAL,
    PRESENCE_TOTAL,
    REGISTERED_TOTAL,
    VISITOR_QUANTITY_TOTAL,
  }: CreateResultEBDDTO): Promise<ResultEBD> {
    const resultEBD = await this.ormRepository.create({
      GUSERS_ID,
      EEBD_ID,
      ECLASS_ID,
      DATE,
      BIBLES_TOTAL,
      MAGAZINES_TOTAL,
      OFFER_TOTAL,
      PERCENTAGE_TOTAL,
      PRESENCE_TOTAL,
      REGISTERED_TOTAL,
      VISITOR_QUANTITY_TOTAL,
    });
    await this.ormRepository.save(resultEBD);

    return resultEBD;
  }

  public async update(resultEBD: ResultEBD): Promise<ResultEBD> {
    await this.ormRepository.save(resultEBD);
    return resultEBD;
  }
}

export default ResultEBDRepository;
