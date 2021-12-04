import { inject, injectable } from 'tsyringe';

import ClassStudent from '../infra/typeorm/entities/ClassStudent';
import IClassStudentsRepository from '../repositories/IClassStudentsRepository';

type CreateClassStudentsRequest = {
  ECLASS_ID: string;
  ESTUDENTS_ID: string;
  ELESSONSMAGAZINES_ID: string;
};

@injectable()
class CreateClassStudentsService {
  constructor(
    @inject('ClassStudentsRepository')
    private classStudentsRepository: IClassStudentsRepository,
  ) {}

  public async execute({
    ECLASS_ID,
    ELESSONSMAGAZINES_ID,
    ESTUDENTS_ID,
  }: CreateClassStudentsRequest): Promise<ClassStudent> {
    const classStudent = await this.classStudentsRepository.create({
      ECLASS_ID,
      ELESSONSMAGAZINES_ID,
      ESTUDENTS_ID,
    });

    return classStudent;
  }
}

export default CreateClassStudentsService;
