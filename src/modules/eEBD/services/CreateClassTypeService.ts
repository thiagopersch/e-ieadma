import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';

import ClassType from '../infra/typeorm/entities/ClassType';
import IClassTypeRepository from '../repositories/IClassTypeRepository';

type CreateClassTypeRequest = {
  NAME: string;
  DESCRIPTION?: string;
};

@injectable()
class CreateClassTypeService {
  constructor(
    @inject('ClassTypeRepository')
    private classTypeRepository: IClassTypeRepository,
  ) {}

  public async execute({
    NAME,
    DESCRIPTION,
  }: CreateClassTypeRequest): Promise<ClassType> {
    const existsClassType = await this.classTypeRepository.findByClassType(
      NAME,
    );
    if (existsClassType) {
      throw new AppError('Already an class type with this name');
    }

    const classType = await this.classTypeRepository.create({
      NAME,
      DESCRIPTION,
    });

    return classType;
  }
}

export default CreateClassTypeService;
