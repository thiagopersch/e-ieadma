import CreateMagazineDTO from '../dtos/CreateMagazineDTO';
import Magazine from '../infra/typeorm/entities/Magazine';

export default interface IMagazineRepository {
  findByMagazine: (TITLE: string) => Promise<Magazine | undefined>;
  findAll: () => Promise<Magazine[]>;
  create: (data: CreateMagazineDTO) => Promise<Magazine>;
  update: (magazine: Magazine) => Promise<Magazine>;
}
