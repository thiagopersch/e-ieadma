import CreateClassDTO from '../dtos/CreateClassDTO';
import Class from '../infra/typeorm/entities/Class';

export default interface IClassRepository {
  findByClass: (NAME: string) => Promise<Class | undefined>;
  create: (data: CreateClassDTO) => Promise<Class>;
}
