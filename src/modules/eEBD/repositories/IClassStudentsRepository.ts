import CreateClassStudentsDTO from '../dtos/CreateClassStudentsDTO';
import ClassStudent from '../infra/typeorm/entities/ClassStudent';

export default interface IClassStudentsRepository {
  /* findByClassStudent: (NAME: string) => Promise<ClassStudent | undefined>; */
  findAll: () => Promise<ClassStudent[]>;
  create: (data: CreateClassStudentsDTO) => Promise<ClassStudent>;
  update: (classStudent: ClassStudent) => Promise<ClassStudent>;
  /* delete: (trimestre: Trimestre) => Promise<void>; */
}
