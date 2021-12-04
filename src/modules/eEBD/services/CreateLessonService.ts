import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';

import Lesson from '../infra/typeorm/entities/Lesson';
import ILessonRepository from '../repositories/ILessonRepository';

type CreateLessonRequest = {
  LESSON_CODE: string;
  TITLE: string;
  DATE: Date;
  PAGE: number;
};

@injectable()
class CreateLessonService {
  constructor(
    @inject('LessonRepository') private lessonRepository: ILessonRepository,
  ) {}

  public async execute({
    LESSON_CODE,
    TITLE,
    DATE,
    PAGE,
  }: CreateLessonRequest): Promise<Lesson> {
    const existsLesson = await this.lessonRepository.findByLesson(LESSON_CODE);
    if (existsLesson) {
      throw new AppError('There is already a lesson with this code.');
    }

    const lesson = await this.lessonRepository.create({
      LESSON_CODE,
      TITLE,
      DATE,
      PAGE,
    });
    return lesson;
  }
}

export default CreateLessonService;
