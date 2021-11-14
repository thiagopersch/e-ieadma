import CreateClassTypeDTO from '@modules/eEBD/dtos/CreateClassTypeDTO';
import { getRepository, Repository } from 'typeorm';

import ClassType from '../entities/ClassType';

class ClassTypeRepository {
  private ormRepository: Repository<ClassType>;

  constructor() {
    this.ormRepository = getRepository(ClassType);
  }

  public async findByClassType(NAME: string): Promise<ClassType | undefined> {
    const classType = await this.ormRepository.findOne({ NAME });
    return classType;
  }

  public async findAll(): Promise<ClassType[]> {
    const classType = await this.ormRepository.find();
    return classType;
  }

  public async create({
    NAME,
    DESCRIPTION,
  }: CreateClassTypeDTO): Promise<ClassType> {
    const classType = this.ormRepository.create({
      NAME,
      DESCRIPTION,
    });
    await this.ormRepository.save(classType);

    return classType;
  }

  public async update(classType: ClassType): Promise<ClassType> {
    await this.ormRepository.save(classType);
    return classType;
  }
}

export default ClassTypeRepository;
