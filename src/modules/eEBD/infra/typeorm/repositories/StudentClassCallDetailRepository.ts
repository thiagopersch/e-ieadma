import { getRepository, Repository } from 'typeorm';

import IStudentClassCallDetailRepository from '@modules/eEBD/repositories/IStudentClassCallDetailRepository';
import CreateStudentClassCallDetailDTO from '@modules/eEBD/dtos/CreateStudentClassCallDetailDTO';
import StudentClassCallDetail from '../entities/StudentClassCallDetail';

class StudentClassCallDetailRepository
  implements IStudentClassCallDetailRepository
{
  private ormRepository: Repository<StudentClassCallDetail>;

  constructor() {
    this.ormRepository = getRepository(StudentClassCallDetail);
  }

  public async findAll(): Promise<StudentClassCallDetail[]> {
    const studentClassCallDetail = await this.ormRepository.find();
    return studentClassCallDetail;
  }

  public async create({
    ECLASSSTUDENTS_ID,
    PRESENCE,
    BIBLE,
    MAGAZINE,
    OFFER,
    ABSENCE_DATE,
  }: CreateStudentClassCallDetailDTO): Promise<StudentClassCallDetail> {
    const studentClassCallDetail = await this.ormRepository.create({
      ECLASSSTUDENTS_ID,
      PRESENCE,
      BIBLE,
      MAGAZINE,
      OFFER,
      ABSENCE_DATE,
    });
    await this.ormRepository.save(studentClassCallDetail);

    return studentClassCallDetail;
  }

  public async update(
    studentClassCallDetail: StudentClassCallDetail,
  ): Promise<StudentClassCallDetail> {
    await this.ormRepository.save(studentClassCallDetail);
    return studentClassCallDetail;
  }
}

export default StudentClassCallDetailRepository;
