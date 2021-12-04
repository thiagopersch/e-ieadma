import CreateEBDDTO from '../dtos/CreateEBDDTO';
import EBD from '../infra/typeorm/entities/EBD';

export default interface IEBDRepository {
  create: (data: CreateEBDDTO) => Promise<EBD>;
  update: (ebd: EBD) => Promise<EBD>;
}
