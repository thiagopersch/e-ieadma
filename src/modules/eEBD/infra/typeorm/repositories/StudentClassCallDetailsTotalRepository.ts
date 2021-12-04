import { getRepository, Repository } from 'typeorm';

import IStudentClassCallDetailsTotalRepository from '@modules/eEBD/repositories/IStudentClassCallDetailsTotalRepository';
import CreateStudentClassCallDetailsTotalDTO from '@modules/eEBD/dtos/CreateStudentClassCallDetailsTotalDTO';
import StudentClassCallDetailsTotal from '../entities/StudentClassCallDetailsTotal';

class StudentClassCallDetailsTotalRepository
  implements IStudentClassCallDetailsTotalRepository
{
  private ormRepository: Repository<StudentClassCallDetailsTotal>;

  constructor() {
    this.ormRepository = getRepository(StudentClassCallDetailsTotal);
  }

  public async findAll(): Promise<StudentClassCallDetailsTotal[]> {
    const studentClassCallDetail = await this.ormRepository.find();
    return studentClassCallDetail;
  }

  public async create({
    ECLASS_ID,
    PRESENCES,
    BIBLES,
    MAGAZINES,
    OFFER,
    VISITOR_QUANTITY,
    REGISTERED,
    PERCENTAGE,
  }: CreateStudentClassCallDetailsTotalDTO): Promise<StudentClassCallDetailsTotal> {
    const studentClassCallDetailsTotal = await this.ormRepository.create({
      ECLASS_ID,
      PRESENCES,
      BIBLES,
      MAGAZINES,
      OFFER,
      VISITOR_QUANTITY,
      REGISTERED,
      PERCENTAGE,
    });
    await this.ormRepository.save(studentClassCallDetailsTotal);

    return studentClassCallDetailsTotal;
  }

  public async update(
    studentClassCallDetailsTotal: StudentClassCallDetailsTotal,
  ): Promise<StudentClassCallDetailsTotal> {
    await this.ormRepository.save(studentClassCallDetailsTotal);
    return studentClassCallDetailsTotal;
  }
}

export default StudentClassCallDetailsTotalRepository;
