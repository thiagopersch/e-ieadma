import CreateStudentClassCallDetailDTO from '../dtos/CreateStudentClassCallDetailDTO';
import StudentClassCallDetail from '../infra/typeorm/entities/StudentClassCallDetail';

export default interface IStudentClassCallDetailRepository {
  findAll: () => Promise<StudentClassCallDetail[]>;
  create: (
    data: CreateStudentClassCallDetailDTO,
  ) => Promise<StudentClassCallDetail>;
  update: (
    studentClassCallDetail: StudentClassCallDetail,
  ) => Promise<StudentClassCallDetail>;
}
