import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateClassService from '@modules/eEBD/services/CreateClassService';

class ClassController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { ECLASSTYPE_ID, NAME, DESCRIPTION } = request.body;

    const createClass = container.resolve(CreateClassService);
    const classes = createClass.execute({
      ECLASSTYPE_ID,
      NAME,
      DESCRIPTION,
    });

    return response.json(classes);
  }
}
export default ClassController;
