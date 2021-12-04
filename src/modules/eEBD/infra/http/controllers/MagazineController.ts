import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateMagazineService from '@modules/eEBD/services/CreateMagazineService';

class MagazineController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { ETRIMESTRE_ID, EMAGAZINESTYPE_ID, TITLE, DESCRIPTION } =
      request.body;

    const createMagazine = container.resolve(CreateMagazineService);
    const magazine = await createMagazine.execute({
      ETRIMESTRE_ID,
      EMAGAZINESTYPE_ID,
      TITLE,
      DESCRIPTION,
    });

    return response.json(magazine);
  }
}
export default MagazineController;
