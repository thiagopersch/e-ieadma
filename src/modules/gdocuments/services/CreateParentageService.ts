import { inject, injectable } from 'tsyringe';

import Parentage from '../infra/typeorm/entities/Parentage';

import IParentageRepository from '../repositories/IParentageRepository';

type CreateParentageRequest = {
  NAME: string;
  GPARENTAGETYPE_ID: string;
};

@injectable()
class CreateParentageService {
  constructor(
    @inject('ParentageRepository') private parentage: IParentageRepository,
  ) {}

  public async execute({
    NAME,
    GPARENTAGETYPE_ID,
  }: CreateParentageRequest): Promise<Parentage> {
    const parentage = await this.parentage.create({ NAME, GPARENTAGETYPE_ID });

    return parentage;
  }
}

export default CreateParentageService;
