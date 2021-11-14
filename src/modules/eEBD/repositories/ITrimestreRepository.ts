import CreateTrimestreDTO from '../dtos/CreateTrimestreDTO';

import Trimestre from '../infra/typeorm/entities/Trimestre';

export default interface ITrimestreRepository {
  findByTrimestre: (NAME: string) => Promise<Trimestre | undefined>;
  findAll: () => Promise<Trimestre[]>;
  create: (data: CreateTrimestreDTO) => Promise<Trimestre>;
  update: (trimestre: Trimestre) => Promise<Trimestre>;
  /* delete: (trimestre: Trimestre) => Promise<void>; */
}
