import CreateLessonMagazinesDTO from '../dtos/CreateLessonMagazinesDTO';
import LessonsMagazine from '../infra/typeorm/entities/LessonsMagazine';

export default interface ILessonMagazinesRepository {
  create: (data: CreateLessonMagazinesDTO) => Promise<LessonsMagazine>;
}
