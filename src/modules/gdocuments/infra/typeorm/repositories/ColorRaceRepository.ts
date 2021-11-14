import { getRepository, Repository } from 'typeorm';

import CreateColorRaceDTO from '@modules/gdocuments/dtos/CreateColorRaceDTO';

import IColorRaceRepository from '@modules/gdocuments/repositories/IColorRaceRepository';
import ColorRace from '../entities/ColorRace';

class ColorRaceRepository implements IColorRaceRepository {
  private ormRepository: Repository<ColorRace>;

  constructor() {
    this.ormRepository = getRepository(ColorRace);
  }

  public async create({ NAME }: CreateColorRaceDTO): Promise<ColorRace> {
    const colorRace = this.ormRepository.create({ NAME });
    await this.ormRepository.save(colorRace);

    return colorRace;
  }
}

export default ColorRaceRepository;
