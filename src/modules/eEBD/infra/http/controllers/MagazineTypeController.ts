import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateMagazineTypeService from '@modules/eEBD/services/CreateMagazineTypeService';

class MagazineTypeController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { NAME, DESCRIPTION } = request.body;

    const createMagazineType = container.resolve(CreateMagazineTypeService);
    const magazineType = await createMagazineType.execute({
      NAME,
      DESCRIPTION,
    });

    return response.json(magazineType);
  }
}
export default MagazineTypeController;
