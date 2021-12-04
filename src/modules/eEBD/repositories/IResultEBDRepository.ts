import CreateResultEBDDTO from '../dtos/CreateResultEBDDTO';
import ResultEBD from '../infra/typeorm/entities/ResultEBD';

export default interface ResultEBDRepository {
  findAll: () => Promise<ResultEBD[]>;
  create: (data: CreateResultEBDDTO) => Promise<ResultEBD>;
  update: (resultEBD: ResultEBD) => Promise<ResultEBD>;
}
