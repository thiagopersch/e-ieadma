import CreateMagazineTypeDTO from '../dtos/CreateMagazineTypeDTO';
import MagazineType from '../infra/typeorm/entities/MagazineType';

export default interface IMagazineTypeRepository {
  findByMagazineType: (NAME: string) => Promise<MagazineType | undefined>;
  findAll: () => Promise<MagazineType[]>;
  create: (data: CreateMagazineTypeDTO) => Promise<MagazineType>;
  update: (magazineType: MagazineType) => Promise<MagazineType>;
}
