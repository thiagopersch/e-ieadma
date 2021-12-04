import { getRepository, Repository } from 'typeorm';

import CreateLessonDTO from '@modules/eEBD/dtos/CreateLessonDTO';
import ILessonRepository from '@modules/eEBD/repositories/ILessonRepository';
import Lesson from '../entities/Lesson';

class LessonRepository implements ILessonRepository {
  private ormRepository: Repository<Lesson>;

  constructor() {
    this.ormRepository = getRepository(Lesson);
  }

  public async findByLesson(LESSON_CODE: string): Promise<Lesson | undefined> {
    const lesson = await this.ormRepository.findOne({ LESSON_CODE });
    return lesson;
  }

  public async findAll(): Promise<Lesson[]> {
    const lesson = await this.ormRepository.find();
    return lesson;
  }

  public async create({
    LESSON_CODE,
    TITLE,
    DATE,
    PAGE,
  }: CreateLessonDTO): Promise<Lesson> {
    const lesson = await this.ormRepository.create({
      LESSON_CODE,
      TITLE,
      DATE,
      PAGE,
    });
    await this.ormRepository.save(lesson);

    return lesson;
  }

  public async update(lesson: Lesson): Promise<Lesson> {
    await this.ormRepository.save(lesson);
    return lesson;
  }
}

export default LessonRepository;
