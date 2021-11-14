import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateCivilStatusService from '@modules/gdocuments/services/CreateCivilStatusService';

class CivilStatusController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { NAME } = request.body;

    const createCivilStatus = container.resolve(CreateCivilStatusService);

    const civilStatus = await createCivilStatus.execute({ NAME });

    return response.json(civilStatus);
  }
}

export default CivilStatusController;
