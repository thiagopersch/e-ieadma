import { getRepository, Repository } from 'typeorm';

import CreateLessonMagazinesDTO from '@modules/eEBD/dtos/CreateLessonMagazinesDTO';
import ILessonMagazinesRepository from '@modules/eEBD/repositories/ILessonMagazinesRepository';
import LessonsMagazine from '../entities/LessonsMagazine';

class LessonMagazinesRepository implements ILessonMagazinesRepository {
  private ormRepository: Repository<LessonsMagazine>;

  constructor() {
    this.ormRepository = getRepository(LessonsMagazine);
  }

  public async create({
    EMAGAZINES_ID,
    ELESSONS_ID,
  }: CreateLessonMagazinesDTO): Promise<LessonsMagazine> {
    const lessonMagazines = await this.ormRepository.create({
      EMAGAZINES_ID,
      ELESSONS_ID,
    });
    await this.ormRepository.save(lessonMagazines);

    return lessonMagazines;
  }
}

export default LessonMagazinesRepository;
