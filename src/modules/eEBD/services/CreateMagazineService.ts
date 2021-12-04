import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';

import Magazine from '../infra/typeorm/entities/Magazine';
import IMagazineRepository from '../repositories/IMagazineRepository';

type CreateMagazineRequest = {
  ETRIMESTRE_ID: string;
  EMAGAZINESTYPE_ID: string;
  TITLE: string;
  DESCRIPTION?: string;
};

@injectable()
class CreateMagazineService {
  constructor(
    @inject('MagazineRepository')
    private magazineRepository: IMagazineRepository,
  ) {}

  public async execute({
    ETRIMESTRE_ID,
    EMAGAZINESTYPE_ID,
    TITLE,
    DESCRIPTION,
  }: CreateMagazineRequest): Promise<Magazine> {
    const existMagazine = await this.magazineRepository.findByMagazine(TITLE);
    if (existMagazine) {
      throw new AppError('Already an magazine with this title');
    }

    const magazine = await this.magazineRepository.create({
      ETRIMESTRE_ID,
      EMAGAZINESTYPE_ID,
      TITLE,
      DESCRIPTION,
    });
    return magazine;
  }
}

export default CreateMagazineService;
