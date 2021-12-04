import { inject, injectable } from 'tsyringe';

import BranchType from '@shared/infra/typeorm/enums/Branch';
import EcclesiasticalField from '../infra/typeorm/entities/EcclesiasticalField';

import IEcclesiasticalFieldRepository from '../repositories/IEcclesiasticalFieldRepository';

type CreateEcclesiasticalFieldRequest = {
  NAME: string;
  TYPE: BranchType;
  STREET: string;
  NUMBER: string;
  DISTRICT: string;
  COMPLEMENT?: string;
  CEP: string;
  CITY: string;
  STATE: string;
  COUNTRY: string;
  PHONE: string;
  PHONE_TWO?: string;
  PHONE_THREE?: string;
};

@injectable()
class CreateEcclesiasticalFieldService {
  constructor(
    @inject('EcclesiasticalFieldRepository')
    private ecclesiasticalFieldRepository: IEcclesiasticalFieldRepository,
  ) {}

  public async execute({
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
  }: CreateEcclesiasticalFieldRequest): Promise<EcclesiasticalField> {
    const ecclesiasticalField = await this.ecclesiasticalFieldRepository.create(
      {
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
      },
    );
    return ecclesiasticalField;
  }
}

export default CreateEcclesiasticalFieldService;
