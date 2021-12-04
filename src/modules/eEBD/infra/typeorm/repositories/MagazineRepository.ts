import { getRepository, Repository } from 'typeorm';

import CreateMagazineDTO from '@modules/eEBD/dtos/CreateMagazineDTO';
import IMagazineRepository from '@modules/eEBD/repositories/IMagazineRepository';
import Magazine from '../entities/Magazine';

class MagazineRepository implements IMagazineRepository {
  private ormRepository: Repository<Magazine>;

  constructor() {
    this.ormRepository = getRepository(Magazine);
  }

  public async findByMagazine(TITLE: string): Promise<Magazine | undefined> {
    const magazine = await this.ormRepository.findOne({ TITLE });
    return magazine;
  }

  public async findAll(): Promise<Magazine[]> {
    const magazine = await this.ormRepository.find();
    return magazine;
  }

  public async create({
    ETRIMESTRE_ID,
    EMAGAZINESTYPE_ID,
    TITLE,
    DESCRIPTION,
  }: CreateMagazineDTO): Promise<Magazine> {
    const magazine = await this.ormRepository.create({
      ETRIMESTRE_ID,
      EMAGAZINESTYPE_ID,
      TITLE,
      DESCRIPTION,
    });
    await this.ormRepository.save(magazine);

    return magazine;
  }

  public async update(magazine: Magazine): Promise<Magazine> {
    await this.ormRepository.save(magazine);
    return magazine;
  }
}
export default MagazineRepository;
