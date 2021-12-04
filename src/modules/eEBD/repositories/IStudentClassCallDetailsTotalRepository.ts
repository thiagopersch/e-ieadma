import CreateStudentClassCallDetailsTotalDTO from '../dtos/CreateStudentClassCallDetailsTotalDTO';
import StudentClassCallDetailsTotal from '../infra/typeorm/entities/StudentClassCallDetailsTotal';

export default interface IStudentClassCallDetailsTotalRepository {
  findAll: () => Promise<StudentClassCallDetailsTotal[]>;
  create: (
    data: CreateStudentClassCallDetailsTotalDTO,
  ) => Promise<StudentClassCallDetailsTotal>;
  update: (
    studentClassCallDetailsTotal: StudentClassCallDetailsTotal,
  ) => Promise<StudentClassCallDetailsTotal>;
}
