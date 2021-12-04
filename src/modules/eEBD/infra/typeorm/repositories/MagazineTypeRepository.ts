import { getRepository, Repository } from 'typeorm';

import CreateMagazineTypeDTO from '@modules/eEBD/dtos/CreateMagazineTypeDTO';
import IMagazineTypeRepository from '@modules/eEBD/repositories/IMagazineTypeRepository';
import MagazineType from '../entities/MagazineType';

class MagazineTypeRepository implements IMagazineTypeRepository {
  private ormRepository: Repository<MagazineType>;

  constructor() {
    this.ormRepository = getRepository(MagazineType);
  }

  public async findByMagazineType(
    NAME: string,
  ): Promise<MagazineType | undefined> {
    const magazineType = await this.ormRepository.findOne({ NAME });
    return magazineType;
  }

  public async findAll(): Promise<MagazineType[]> {
    const magazineType = await this.ormRepository.find();
    return magazineType;
  }

  public async create({
    NAME,
    DESCRIPTION,
  }: CreateMagazineTypeDTO): Promise<MagazineType> {
    const magazineType = await this.ormRepository.create({
      NAME,
      DESCRIPTION,
    });
    await this.ormRepository.save(magazineType);

    return magazineType;
  }

  public async update(magazineType: MagazineType): Promise<MagazineType> {
    await this.ormRepository.save(magazineType);
    return magazineType;
  }
}
export default MagazineTypeRepository;
