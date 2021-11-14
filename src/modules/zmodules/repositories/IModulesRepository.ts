import CreateModulesDTO from '@modules/zmodules/dtos/CreateModulesDTO';

import Module from '@modules/zmodules/infra/typeorm/entities/Module';

export default interface IModulesRepository {
  create: (data: CreateModulesDTO) => Promise<Module>;
}
