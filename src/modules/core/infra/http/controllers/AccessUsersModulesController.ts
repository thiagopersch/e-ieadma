import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateAccessUsersModuleService from '@modules/core/services/CreateAccessUsersModuleService';
/* import ListAccessModulesService from '@modules/authorization/services/ListAccessModulesService';
import DeleteAccessModuleService from '@modules/authorization/services/DeleteAccessModuleService'; */

class AccessUsersModulesController {
  /* public async index(request: Request, response: Response): Promise<Response> {
    const { access_level_id } = request.query;

    const listAccessModules = container.resolve(ListAccessModulesService);
    const accessModules = await listAccessModules.execute({
      access_level_id: access_level_id as string,
    });

    return response.json(accessModules);
  } */

  public async create(request: Request, response: Response): Promise<Response> {
    const data = request.body;

    const createAccessModule = container.resolve(
      CreateAccessUsersModuleService,
    );

    const accessModule = await createAccessModule.execute(data);

    return response.json(accessModule);
  }

  /* public async delete(request: Request, response: Response): Promise<Response> {
    const { access_module_id } = request.params;

    const deleteAccessModule = container.resolve(DeleteAccessModuleService);
    await deleteAccessModule.execute({ access_module_id });

    return response.status(204).send();
  } */
}

export default AccessUsersModulesController;
