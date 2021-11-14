import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateClassTypeService from '@modules/eEBD/services/CreateClassTypeService';

class ClassTypeController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { NAME, DESCRIPTION } = request.body;

    const createClassType = container.resolve(CreateClassTypeService);
    const classType = await createClassType.execute({
      NAME,
      DESCRIPTION,
    });

    return response.json(classType);
  }
}
export default ClassTypeController;
