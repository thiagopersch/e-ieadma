import { inject, injectable } from 'tsyringe';

import StudentClassCallDetailsTotal from '../infra/typeorm/entities/StudentClassCallDetailsTotal';
import IStudentClassCallDetailsTotalRepository from '../repositories/IStudentClassCallDetailsTotalRepository';

type CreateStudentClassCallDetailsTotalRequest = {
  ECLASS_ID: string;
  PRESENCES: number;
  BIBLES: number;
  MAGAZINES: number;
  OFFER: number;
  VISITOR_QUANTITY: number;
  REGISTERED: number;
  PERCENTAGE: number;
};

@injectable()
class CreateStudentClassCallDetailsTotalService {
  constructor(
    @inject('StudentClassCallDetailsTotalRepository')
    private studentClassCallDetailsTotalRepository: IStudentClassCallDetailsTotalRepository,
  ) {}

  public async execute({
    ECLASS_ID,
    PRESENCES,
    BIBLES,
    MAGAZINES,
    OFFER,
    VISITOR_QUANTITY,
    REGISTERED,
    PERCENTAGE,
  }: CreateStudentClassCallDetailsTotalRequest): Promise<StudentClassCallDetailsTotal> {
    const studentClassCallDetailsTotal =
      await this.studentClassCallDetailsTotalRepository.create({
        ECLASS_ID,
        PRESENCES,
        BIBLES,
        MAGAZINES,
        OFFER,
        VISITOR_QUANTITY,
        REGISTERED,
        PERCENTAGE,
      });
    return studentClassCallDetailsTotal;
  }
}

export default CreateStudentClassCallDetailsTotalService;
