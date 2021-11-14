import { inject, injectable } from 'tsyringe';

import BranchType from '@shared/infra/typeorm/enums/Branch';
import EcclesiasticalField from '../infra/typeorm/entities/EcclesiasticalField';

import IEcclesiasticalFieldRepository from '../repositories/IEcclesiasticalFieldRepository';

type CreateEcclesiasticalFieldRequest = {
  NAME: string;
  LOCATION: string;
  TYPE: BranchType;
};

@injectable()
class CreateEcclesiasticalFieldService {
  constructor(
    @inject('EcclesiasticalFieldRepository')
    private ecclesiasticalFieldRepository: IEcclesiasticalFieldRepository,
  ) {}

  public async execute({
    NAME,
    LOCATION,
    TYPE,
  }: CreateEcclesiasticalFieldRequest): Promise<EcclesiasticalField> {
    const ecclesiasticalField = await this.ecclesiasticalFieldRepository.create(
      {
        NAME,
        LOCATION,
        TYPE,
      },
    );
    return ecclesiasticalField;
  }
}

export default CreateEcclesiasticalFieldService;
