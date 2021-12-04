import { inject, injectable } from 'tsyringe';

import StudentClassCallDetail from '../infra/typeorm/entities/StudentClassCallDetail';
import IStudentClassCallDetailRepository from '../repositories/IStudentClassCallDetailRepository';

type CreateStudentClassCallDetailRequest = {
  ECLASSSTUDENTS_ID: string;
  PRESENCE: boolean;
  BIBLE: boolean;
  MAGAZINE: boolean;
  OFFER: number;
  ABSENCE_DATE: Date;
};

@injectable()
class CreateStudentClassCallDetailService {
  constructor(
    @inject('StudentClassCallDetailRepository')
    private studentClassCallDetailRepository: IStudentClassCallDetailRepository,
  ) {}

  public async execute({
    ECLASSSTUDENTS_ID,
    PRESENCE,
    BIBLE,
    MAGAZINE,
    OFFER,
    ABSENCE_DATE,
  }: CreateStudentClassCallDetailRequest): Promise<StudentClassCallDetail> {
    const studentClassCallDetail =
      await this.studentClassCallDetailRepository.create({
        ECLASSSTUDENTS_ID,
        PRESENCE,
        BIBLE,
        MAGAZINE,
        OFFER,
        ABSENCE_DATE,
      });

    return studentClassCallDetail;
  }
}

export default CreateStudentClassCallDetailService;
