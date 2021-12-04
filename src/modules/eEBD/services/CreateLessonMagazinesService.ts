import { inject, injectable } from 'tsyringe';

import LessonsMagazine from '../infra/typeorm/entities/LessonsMagazine';
import ILessonMagazinesRepository from '../repositories/ILessonMagazinesRepository';

type CreateLessonMagazinesRequest = {
  EMAGAZINES_ID: string;
  ELESSONS_ID: string;
};

@injectable()
class CreateLessonMagazinesService {
  constructor(
    @inject('LessonMagazinesRepository')
    private lessonMagazinesRepository: ILessonMagazinesRepository,
  ) {}

  public async execute({
    EMAGAZINES_ID,
    ELESSONS_ID,
  }: CreateLessonMagazinesRequest): Promise<LessonsMagazine> {
    const lessonMagazines = await this.lessonMagazinesRepository.create({
      EMAGAZINES_ID,
      ELESSONS_ID,
    });
    return lessonMagazines;
  }
}

export default CreateLessonMagazinesService;
