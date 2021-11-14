import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateParentageTypeService from '@modules/gdocuments/services/CreateParentageTypeService';

class ParentageTypeController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { NAME } = request.body;

    const createParentageType = container.resolve(CreateParentageTypeService);

    const parentageType = await createParentageType.execute({ NAME });

    return response.json(parentageType);
  }
}

export default ParentageTypeController;
