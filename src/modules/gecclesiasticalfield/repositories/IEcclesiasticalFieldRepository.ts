import CreateEcclesiasticalFieldDTO from '@modules/gecclesiasticalfield/dtos/CreateEcclesiasticalFieldDTO';
import EcclesiasticalField from '@modules/gecclesiasticalfield/infra/typeorm/entities/EcclesiasticalField';
import FindEcclesiasticalFieldDTO from '../dtos/FindEcclesiasticalFieldDTO';

export default interface IEcclesiasticalFieldRepository {
  findOne: (
    filters: FindEcclesiasticalFieldDTO,
  ) => Promise<EcclesiasticalField | undefined>;
  findAll: (
    filters: FindEcclesiasticalFieldDTO,
  ) => Promise<EcclesiasticalField[]>;
  create: (data: CreateEcclesiasticalFieldDTO) => Promise<EcclesiasticalField>;
  update: (
    ecclesiasticalField: EcclesiasticalField,
  ) => Promise<EcclesiasticalField>;
}
