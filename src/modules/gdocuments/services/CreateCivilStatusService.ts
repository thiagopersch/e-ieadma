import { inject, injectable } from 'tsyringe';

import CivilStatus from '../infra/typeorm/entities/CivilStatus';

import ICivilStatusRepository from '../repositories/ICivilStatusRepository';

type CreateCivilStatusRequest = {
  NAME: string;
};

@injectable()
class CreateCivilStatusService {
  constructor(
    @inject('CivilStatusRepository')
    private civilStatusRepository: ICivilStatusRepository,
  ) {}

  public async execute({
    NAME,
  }: CreateCivilStatusRequest): Promise<CivilStatus> {
    const civilStatus = await this.civilStatusRepository.create({ NAME });

    return civilStatus;
  }
}
export default CreateCivilStatusService;
