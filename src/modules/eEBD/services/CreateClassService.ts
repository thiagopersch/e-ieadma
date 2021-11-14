import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';

import Class from '../infra/typeorm/entities/Class';

import IClassRepository from '../repositories/IClassRepository';

type CreateClassRequest = {
  ECLASSTYPE_ID: string;
  NAME: string;
  DESCRIPTION?: string;
};

@injectable()
class CreateClassService {
  constructor(
    @inject('ClassRepository') private classRepository: IClassRepository,
  ) {}

  public async execute({
    ECLASSTYPE_ID,
    NAME,
    DESCRIPTION,
  }: CreateClassRequest): Promise<Class> {
    const existsClass = await this.classRepository.findByClass(NAME);
    if (existsClass) {
      throw new AppError('Already an class with this name');
    }

    const classes = await this.classRepository.create({
      ECLASSTYPE_ID,
      NAME,
      DESCRIPTION,
    });

    return classes;
  }
}

export default CreateClassService;
