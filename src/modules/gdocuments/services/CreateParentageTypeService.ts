import { inject, injectable } from 'tsyringe';

import ParentageType from '../infra/typeorm/entities/ParentageType';

import IParentageTypeRepository from '../repositories/IParentageTypeRepository';

type CreateParentageTypeRequest = {
  NAME: string;
};

@injectable()
class CreateParentageTypeService {
  constructor(
    @inject('ParentageTypeRepository')
    private parentageType: IParentageTypeRepository,
  ) {}

  public async execute({
    NAME,
  }: CreateParentageTypeRequest): Promise<ParentageType> {
    const parentageType = await this.parentageType.create({ NAME });

    return parentageType;
  }
}

export default CreateParentageTypeService;
