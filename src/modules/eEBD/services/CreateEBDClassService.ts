import { inject, injectable } from 'tsyringe';

import EBDClass from '../infra/typeorm/entities/EBDClass';
import IEBDClassRepository from '../repositories/IEBDClassRepository';

type CreateEBDClassRequest = {
  ECLASS_ID: string;
  EEBD_ID: string;
};

@injectable()
class CreateEBDClassService {
  constructor(
    @inject('EBDClassRepository')
    private eBDClassRepository: IEBDClassRepository,
  ) {}

  public async execute({
    ECLASS_ID,
    EEBD_ID,
  }: CreateEBDClassRequest): Promise<EBDClass> {
    const ebdClass = await this.eBDClassRepository.create({
      ECLASS_ID,
      EEBD_ID,
    });

    return ebdClass;
  }
}

export default CreateEBDClassService;
