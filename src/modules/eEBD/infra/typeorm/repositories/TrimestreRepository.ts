import { getRepository, Repository } from 'typeorm';

import CreateTrimestreDTO from '@modules/eEBD/dtos/CreateTrimestreDTO';
import ITrimestreRepository from '@modules/eEBD/repositories/ITrimestreRepository';
import Trimestre from '../entities/Trimestre';

class TrimestreRepository implements ITrimestreRepository {
  private ormRepository: Repository<Trimestre>;

  constructor() {
    this.ormRepository = getRepository(Trimestre);
  }

  public async findByTrimestre(NAME: string): Promise<Trimestre | undefined> {
    const trimestre = await this.ormRepository.findOne({ NAME });
    return trimestre;
  }

  public async findAll(): Promise<Trimestre[]> {
    const trimestre = await this.ormRepository.find();
    return trimestre;
  }

  public async create({
    NAME,
    START_DATE,
    FINAL_DATE,
  }: CreateTrimestreDTO): Promise<Trimestre> {
    const trimestre = this.ormRepository.create({
      NAME,
      START_DATE,
      FINAL_DATE,
    });
    await this.ormRepository.save(trimestre);

    return trimestre;
  }

  public async update(trimestre: Trimestre): Promise<Trimestre> {
    await this.ormRepository.save(trimestre);
    return trimestre;
  }
}
export default TrimestreRepository;
