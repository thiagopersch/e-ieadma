import { inject, injectable } from 'tsyringe';

import ColorRace from '../infra/typeorm/entities/ColorRace';

import IColorRaceRepository from '../repositories/IColorRaceRepository';

type CreateColorRaceRequest = {
  NAME: string;
};

@injectable()
class CreateColorRaceService {
  constructor(
    @inject('ColorRaceRepository')
    private colorRaceRepository: IColorRaceRepository,
  ) {}

  public async execute({ NAME }: CreateColorRaceRequest): Promise<ColorRace> {
    const colorRace = await this.colorRaceRepository.create({ NAME });

    return colorRace;
  }
}
export default CreateColorRaceService;
