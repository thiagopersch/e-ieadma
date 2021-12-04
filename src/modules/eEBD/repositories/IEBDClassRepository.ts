import CreateEBDClassDTO from '../dtos/CreateEBDClassDTO';
import EBDClass from '../infra/typeorm/entities/EBDClass';

export default interface IEBDClassRepository {
  create: (data: CreateEBDClassDTO) => Promise<EBDClass>;
  update: (ebdClass: EBDClass) => Promise<EBDClass>;
}
