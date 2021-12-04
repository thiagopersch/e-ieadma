import CreateLessonDTO from '../dtos/CreateLessonDTO';
import Lesson from '../infra/typeorm/entities/Lesson';

export default interface ILessonRepository {
  findByLesson: (LESSON_CODE: string) => Promise<Lesson | undefined>;
  create: (data: CreateLessonDTO) => Promise<Lesson>;
  update: (lesosn: Lesson) => Promise<Lesson>;
}
