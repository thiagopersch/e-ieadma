import { getRepository, Repository } from 'typeorm';

import IClassStudentsRepository from '@modules/eEBD/repositories/IClassStudentsRepository';
import CreateClassStudentsDTO from '@modules/eEBD/dtos/CreateClassStudentsDTO';
import ClassStudent from '../entities/ClassStudent';

class ClassStudentsRepository implements IClassStudentsRepository {
  private ormRepository: Repository<ClassStudent>;

  constructor() {
    this.ormRepository = getRepository(ClassStudent);
  }

  /* public async findByClass(NAME: string): Promise<ClassStudent | undefined> {
    const classes = await this.ormRepository.findOne({ NAME });
    return classes;
  } */

  public async findAll(): Promise<ClassStudent[]> {
    const classes = await this.ormRepository.find();
    return classes;
  }

  public async create({
    ECLASS_ID,
    ELESSONSMAGAZINES_ID,
    ESTUDENTS_ID,
  }: CreateClassStudentsDTO): Promise<ClassStudent> {
    const classStudent = this.ormRepository.create({
      ECLASS_ID,
      ELESSONSMAGAZINES_ID,
      ESTUDENTS_ID,
    });
    await this.ormRepository.save(classStudent);
    return classStudent;
  }

  public async update(classStudent: ClassStudent): Promise<ClassStudent> {
    await this.ormRepository.save(classStudent);
    return classStudent;
  }
}

export default ClassStudentsRepository;
