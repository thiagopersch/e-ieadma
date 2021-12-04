import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';

import Trimestre from '../infra/typeorm/entities/Trimestre';
import ITrimestreRepository from '../repositories/ITrimestreRepository';

type CreateTrimestreRequest = {
  NAME: string;
  START_DATE: Date;
  FINAL_DATE: Date;
};

@injectable()
class CreateTrimestreService {
  constructor(
    @inject('TrimestreRepository')
    private trimestreRepository: ITrimestreRepository,
  ) {}

  public async execute({
    NAME,
    START_DATE,
    FINAL_DATE,
  }: CreateTrimestreRequest): Promise<Trimestre> {
    const existsTrimestre = await this.trimestreRepository.findByTrimestre(
      NAME,
    );
    if (existsTrimestre) {
      throw new AppError('Already an trimestre with this name');
    }

    const trimestre = await this.trimestreRepository.create({
      NAME,
      START_DATE,
      FINAL_DATE,
    });

    return trimestre;
  }
}

export default CreateTrimestreService;
