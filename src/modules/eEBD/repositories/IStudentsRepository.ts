import CreateStudentDTO from '../dtos/CreateStudentDTO';
import Student from '../infra/typeorm/entities/Student';

export default interface IStudentsRepository {
  findAll: () => Promise<Student[]>;
  create: (data: CreateStudentDTO) => Promise<Student>;
  update: (student: Student) => Promise<Student>;
}
