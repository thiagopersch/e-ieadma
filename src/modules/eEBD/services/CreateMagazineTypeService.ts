import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';

import IMagazineTypeRepository from '../repositories/IMagazineTypeRepository';
import MagazineType from '../infra/typeorm/entities/MagazineType';

type CreateMagazineTypeRequest = {
  NAME: string;
  DESCRIPTION?: string;
};

@injectable()
class CreateMagazineTypeService {
  constructor(
    @inject('MagazineTypeRepository')
    private magazineTypeRepository: IMagazineTypeRepository,
  ) {}

  public async execute({
    NAME,
    DESCRIPTION,
  }: CreateMagazineTypeRequest): Promise<MagazineType> {
    const existsMagazineType =
      await this.magazineTypeRepository.findByMagazineType(NAME);
    if (existsMagazineType) {
      throw new AppError('Already an magazine type with this name');
    }

    const magazineType = await this.magazineTypeRepository.create({
      NAME,
      DESCRIPTION,
    });

    return magazineType;
  }
}

export default CreateMagazineTypeService;
