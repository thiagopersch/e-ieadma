import { FindConditions, getRepository, Repository } from 'typeorm';

import CreateEcclesiasticalFieldDTO from '@modules/gecclesiasticalfield/dtos/CreateEcclesiasticalFieldDTO';
import FindEcclesiasticalFieldDTO from '@modules/gecclesiasticalfield/dtos/FindEcclesiasticalFieldDTO';

import IEcclesiasticalFieldRepository from '@modules/gecclesiasticalfield/repositories/IEcclesiasticalFieldRepository';
import EcclesiasticalField from '../entities/EcclesiasticalField';

class EcclesiasticalFieldRepository implements IEcclesiasticalFieldRepository {
  private ormRepository: Repository<EcclesiasticalField>;

  constructor() {
    this.ormRepository = getRepository(EcclesiasticalField);
  }

  public async findOne({
    ID,
    TYPE,
  }: FindEcclesiasticalFieldDTO): Promise<EcclesiasticalField | undefined> {
    const where: FindConditions<EcclesiasticalField> = {};

    if (ID) where.ID = ID;
    if (TYPE) where.TYPE = TYPE;

    const branch = await this.ormRepository.findOne({
      where,
    });
    return branch;
  }

  public async findAll({
    ID,
    TYPE,
  }: FindEcclesiasticalFieldDTO): Promise<EcclesiasticalField[]> {
    const where: FindConditions<EcclesiasticalField> = {};

    if (ID) where.ID = ID;
    if (TYPE) where.TYPE = TYPE;

    const branchs = await this.ormRepository.find({
      where,
    });
    return branchs;
  }

  public async create({
    NAME,
    TYPE,
    STREET,
    NUMBER,
    DISTRICT,
    COMPLEMENT,
    CEP,
    CITY,
    STATE,
    COUNTRY,
    PHONE,
    PHONE_TWO,
    PHONE_THREE,
  }: CreateEcclesiasticalFieldDTO): Promise<EcclesiasticalField> {
    const ecclesiasticalField = this.ormRepository.create({
      NAME,
      TYPE,
      STREET,
      NUMBER,
      DISTRICT,
      COMPLEMENT,
      CEP,
      CITY,
      STATE,
      COUNTRY,
      PHONE,
      PHONE_TWO,
      PHONE_THREE,
    });
    await this.ormRepository.save(ecclesiasticalField);

    return ecclesiasticalField;
  }

  public async update(
    branch: EcclesiasticalField,
  ): Promise<EcclesiasticalField> {
    await this.ormRepository.save(branch);
    return branch;
  }
}
export default EcclesiasticalFieldRepository;
