import CreateParentageDTO from '../dtos/CreateParentageDTO';
import Parentage from '../infra/typeorm/entities/Parentage';

export default interface IParentageRepository {
  create(data: CreateParentageDTO): Promise<Parentage>;
}
