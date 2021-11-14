import CreateCivilStatusDTO from '../dtos/CreateCivilStatusDTO';

import CivilStatus from '../infra/typeorm/entities/CivilStatus';

export default interface ICivilStatusRepository {
  create(data: CreateCivilStatusDTO): Promise<CivilStatus>;
}
