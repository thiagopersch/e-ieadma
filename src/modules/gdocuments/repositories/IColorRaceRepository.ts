import CreateColorRaceDTO from '../dtos/CreateColorRaceDTO';

import ColorRace from '../infra/typeorm/entities/ColorRace';

export default interface IColorRaceRepository {
  create(data: CreateColorRaceDTO): Promise<ColorRace>;
}
