import { inject, injectable } from 'tsyringe';

import EcclesiasticalField from '../infra/typeorm/entities/EcclesiasticalField';

import IEcclesiasticalFieldRepository from '../repositories/IEcclesiasticalFieldRepository';

@injectable()
class ListEcclesiasticalFieldService {
  constructor(
    @inject('EcclesiasticalFieldRepository')
    private ecclesiasticalFieldRepository: IEcclesiasticalFieldRepository,
  ) {}

  public async execute(): Promise<EcclesiasticalField[]> {
    const ecclesiasticalFieldRepository =
      await this.ecclesiasticalFieldRepository.findAll({});
    return ecclesiasticalFieldRepository;
  }
}

export default ListEcclesiasticalFieldService;
