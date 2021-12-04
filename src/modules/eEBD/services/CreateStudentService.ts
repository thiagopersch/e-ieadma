import { inject, injectable } from 'tsyringe';

import Student from '../infra/typeorm/entities/Student';
import IStudentsRepository from '../repositories/IStudentsRepository';

type CreateStudentRequest = {
  ACHURCHMEMBERS_ID: string;
};

@injectable()
class CreateStudentService {
  constructor(
    @inject('StudentRepository') private StudentRepository: IStudentsRepository,
  ) {}

  public async execute({
    ACHURCHMEMBERS_ID,
  }: CreateStudentRequest): Promise<Student> {
    const student = await this.StudentRepository.create({
      ACHURCHMEMBERS_ID,
    });

    return student;
  }
}

export default CreateStudentService;
