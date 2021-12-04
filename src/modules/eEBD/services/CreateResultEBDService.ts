import { inject, injectable } from 'tsyringe';

import ResultEBD from '../infra/typeorm/entities/ResultEBD';
import IResultEBDRepository from '../repositories/IResultEBDRepository';

type CreateResultEBDRequest = {
  GUSERS_ID: string;
  EEBD_ID: string;
  ECLASS_ID: string;
  DATE: Date;
  PRESENCE_TOTAL: number;
  BIBLES_TOTAL: number;
  MAGAZINES_TOTAL: number;
  OFFER_TOTAL: number;
  VISITOR_QUANTITY_TOTAL: number;
  REGISTERED_TOTAL: number;
  PERCENTAGE_TOTAL: number;
};

@injectable()
class CreateResultEBDService {
  constructor(
    @inject('ResultEBDRepository')
    private resultEBDRepository: IResultEBDRepository,
  ) {}

  public async execute({
    GUSERS_ID,
    EEBD_ID,
    ECLASS_ID,
    DATE,
    PRESENCE_TOTAL,
    BIBLES_TOTAL,
    MAGAZINES_TOTAL,
    OFFER_TOTAL,
    VISITOR_QUANTITY_TOTAL,
    REGISTERED_TOTAL,
    PERCENTAGE_TOTAL,
  }: CreateResultEBDRequest): Promise<ResultEBD> {
    const resultEBD = await this.resultEBDRepository.create({
      GUSERS_ID,
      EEBD_ID,
      ECLASS_ID,
      DATE,
      PRESENCE_TOTAL,
      BIBLES_TOTAL,
      MAGAZINES_TOTAL,
      OFFER_TOTAL,
      VISITOR_QUANTITY_TOTAL,
      REGISTERED_TOTAL,
      PERCENTAGE_TOTAL,
    });

    return resultEBD;
  }
}

export default CreateResultEBDService;
