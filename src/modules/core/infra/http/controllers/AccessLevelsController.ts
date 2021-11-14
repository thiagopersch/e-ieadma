import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateAccessLevelService from '@modules/core/services/CreateAccessLevelService';

class AccessLevelController {
  /* public async index(request: Request, response: Response): Promise<Response> {
    const listAccessLevels = container.resolve(ListAccessLevelsService);
    const accessLevel = await listAccessLevels.execute();

    return response.json(accessLevel);
  } */

  public async create(request: Request, response: Response): Promise<Response> {
    const { NAME, CODE, ONLYON } = request.body;

    const createAccessLevel = container.resolve(CreateAccessLevelService);

    const accessLevel = await createAccessLevel.execute({
      NAME,
      CODE,
      ONLYON,
    });

    return response.json(accessLevel);
  }

  /* public async delete(request: Request, response: Response): Promise<Response> {
    const { access_level_id } = request.params;

    const deleteAccessLevel = container.resolve(DeleteAccessLevelService);
    await deleteAccessLevel.execute({ access_level_id });

    return response.status(204).send();
  } */
}

export default AccessLevelController;
