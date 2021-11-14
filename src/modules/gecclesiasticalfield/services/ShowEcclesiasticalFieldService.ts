import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import BranchType from '@shared/infra/typeorm/enums/Branch';
import EcclesiasticalField from '../infra/typeorm/entities/EcclesiasticalField';

import IEcclesiasticalFieldRepository from '../repositories/IEcclesiasticalFieldRepository';

type ShowEcclesiasticalFieldRequest = {
  ECCLESIASTICALFIELD_ID?: string | 'me';
  PROFILEECCLESIASTICALFIELD_ID?: string;
  TYPE?: BranchType;
};

@injectable()
class ShowEcclesiasticalFieldService {
  constructor(
    @inject('EcclesiasticalFieldRepository')
    private ecclesiasticalFieldRepository: IEcclesiasticalFieldRepository,
  ) {}

  public async execute({
    ECCLESIASTICALFIELD_ID,
    PROFILEECCLESIASTICALFIELD_ID,
    TYPE,
  }: ShowEcclesiasticalFieldRequest): Promise<EcclesiasticalField> {
    if (ECCLESIASTICALFIELD_ID === 'me' && !PROFILEECCLESIASTICALFIELD_ID) {
      throw new AppError('This profile is not associated with a branch');
    }

    const branch = await this.ecclesiasticalFieldRepository.findOne({
      ID:
        ECCLESIASTICALFIELD_ID === 'me'
          ? PROFILEECCLESIASTICALFIELD_ID
          : ECCLESIASTICALFIELD_ID,
      TYPE,
    });
    if (!branch) {
      throw new AppError('Branch not found');
    }

    return branch;
  }
}

export default ShowEcclesiasticalFieldService;
