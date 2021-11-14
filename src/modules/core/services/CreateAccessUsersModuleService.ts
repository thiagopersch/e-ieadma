import { inject, injectable } from 'tsyringe';

import AccessUserModule from '../infra/typeorm/entities/AccessUserModule';
import IAccessLevelsRepository from '../repositories/IAccessLevelsRepository';
import IAccessUsersModulesRepository from '../repositories/IAccessUsersModulesRepository';
import IAppModulesRepository from '../repositories/IAppModulesRepository';
import CreateAccessUsersModulesDTO from '../dtos/CreateAccessUsersModules';

type CreateAccessModuleRequest = Array<{
  GACCESSLEVELS_ID: string;
  GAPPMODULES_ID: string;
  READ: boolean;
  WRITE: boolean;
}>;

type MappedAccessAndModules = {
  ACCESSLEVELS: string[];
  MODULES: string[];
};

type CreateUpdateAccessUsersModules = {
  NEWITEMS: CreateAccessUsersModulesDTO[];
  UPDATEITEMS: AccessUserModule[];
};

@injectable()
class CreateAccessUsersModuleService {
  constructor(
    @inject('AccessUsersModulesRepository')
    private accessUsersModulesRepository: IAccessUsersModulesRepository,
    @inject('AppModulesRepository')
    private appModulesRepository: IAppModulesRepository,
    @inject('AccessLevelsRepository')
    private accessLevelsRepository: IAccessLevelsRepository,
  ) {}

  public async execute(
    items: CreateAccessModuleRequest,
  ): Promise<AccessUserModule[]> {
    const { ACCESSLEVELS, MODULES } = items.reduce<MappedAccessAndModules>(
      (acc, item) => {
        const { ACCESSLEVELS: levels, MODULES: modles } = acc;

        return {
          ...acc,
          ACCESSLEVELS: [...levels, item.GACCESSLEVELS_ID],
          MODULES: [...modles, item.GAPPMODULES_ID],
        };
      },
      {
        ACCESSLEVELS: [],
        MODULES: [],
      },
    );

    const currentAccessUserModules =
      await this.accessUsersModulesRepository.findAll({
        GACCESSLEVELS_ID: ACCESSLEVELS,
        GAPPMODULES_ID: MODULES,
      });

    const { NEWITEMS, UPDATEITEMS } =
      items.reduce<CreateUpdateAccessUsersModules>(
        (acc, item) => {
          const { NEWITEMS: nwItems, UPDATEITEMS: updItems } = acc;

          const currentItem = currentAccessUserModules.find(
            ({ GACCESSLEVELS_ID, GAPPMODULES_ID }) =>
              GACCESSLEVELS_ID === item.GACCESSLEVELS_ID &&
              GAPPMODULES_ID === item.GAPPMODULES_ID,
          );
          if (!currentItem) {
            nwItems.push({
              GACCESSLEVELS_ID: item.GACCESSLEVELS_ID,
              GAPPMODULES_ID: item.GAPPMODULES_ID,
              READ: item.READ,
              WRITE: item.WRITE,
            });
          } else {
            const newItem = Object.assign(currentItem, {
              READ: item.READ,
              WRITE: item.WRITE,
            });
            updItems.push(newItem);
          }

          return { ...acc, NEWITEMS: nwItems, UPDATEITEMS: updItems };
        },
        {
          NEWITEMS: [],
          UPDATEITEMS: [],
        },
      );

    const createdItems = await this.accessUsersModulesRepository.createMany(
      NEWITEMS,
    );
    const updatedItems = await this.accessUsersModulesRepository.updateMany(
      UPDATEITEMS,
    );

    return [...createdItems, ...updatedItems];
  }
}

export default CreateAccessUsersModuleService;
