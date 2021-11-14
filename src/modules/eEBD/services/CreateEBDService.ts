import { inject, injectable } from 'tsyringe';

import EBD from '../infra/typeorm/entities/EBD';
import IEBDRepository from '../repositories/IEBDRepository';

type CreateEBDRequest = {
  ETRIMESTRE_ID: string;
  DATE: Date;
  START_TIME: Date;
  FINAL_TIME: Date;
};

@injectable()
class CreateEBDService {
  constructor(@inject('EBDRepository') private ebdRepository: IEBDRepository) {}

  public async execute({
    ETRIMESTRE_ID,
    DATE,
    START_TIME,
    FINAL_TIME,
  }: CreateEBDRequest): Promise<EBD> {
    const ebd = await this.ebdRepository.create({
      ETRIMESTRE_ID,
      DATE,
      START_TIME,
      FINAL_TIME,
    });

    return ebd;
  }
}

export default CreateEBDService;
