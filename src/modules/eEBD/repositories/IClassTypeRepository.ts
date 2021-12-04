import CreateClassTypeDTO from '../dtos/CreateClassTypeDTO';
import ClassType from '../infra/typeorm/entities/ClassType';

export default interface IClassTypeRepository {
  findByClassType: (NAME: string) => Promise<ClassType | undefined>;
  findAll: () => Promise<ClassType[]>;
  create: (data: CreateClassTypeDTO) => Promise<ClassType>;
  update: (classType: ClassType) => Promise<ClassType>;
}
