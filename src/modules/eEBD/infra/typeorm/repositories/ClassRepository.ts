import CreateClassDTO from '@modules/eEBD/dtos/CreateClassDTO';
import { getRepository, Repository } from 'typeorm';
import Class from '../entities/Class';

class ClassRepository {
  private ormRepository: Repository<Class>;

  constructor() {
    this.ormRepository = getRepository(Class);
  }

  public async findByClass(NAME: string): Promise<Class | undefined> {
    const classes = await this.ormRepository.findOne({ NAME });
    return classes;
  }

  public async findAll(): Promise<Class[]> {
    const classes = await this.ormRepository.find();
    return classes;
  }

  public async create({
    ECLASSTYPE_ID,
    NAME,
    DESCRIPTION,
  }: CreateClassDTO): Promise<Class> {
    const classes = this.ormRepository.create({
      ECLASSTYPE_ID,
      NAME,
      DESCRIPTION,
    });
    await this.ormRepository.save(classes);
    return classes;
  }

  public async update(classes: Class): Promise<Class> {
    await this.ormRepository.save(classes);
    return classes;
  }
}

export default ClassRepository;
