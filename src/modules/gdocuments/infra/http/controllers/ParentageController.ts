import CreateParentageService from '@modules/gdocuments/services/CreateParentageService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class ParentageController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { NAME, GPARENTAGETYPE_ID } = request.body;

    const createParentage = container.resolve(CreateParentageService);

    const parentage = await createParentage.execute({
      NAME,
      GPARENTAGETYPE_ID,
    });

    return response.json(parentage);
  }
}

export default ParentageController;
