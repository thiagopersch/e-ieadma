import CreateParentageTypeDTO from '../dtos/CreateParentageTypeDTO';
import ParentageType from '../infra/typeorm/entities/ParentageType';

export default interface IParentageTypeRepository {
  create(data: CreateParentageTypeDTO): Promise<ParentageType>;
}
