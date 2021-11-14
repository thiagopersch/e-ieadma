import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateModuleService from '@modules/zmodules/services/CreateModuleService';

class ModuleController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { SIGLA, NAME, DESCRIPTION } = request.body;

    const createModule = container.resolve(CreateModuleService);
    const module = await createModule.execute({
      SIGLA,
      NAME,
      DESCRIPTION,
    });

    return response.json(module);
  }
}

export default ModuleController;
