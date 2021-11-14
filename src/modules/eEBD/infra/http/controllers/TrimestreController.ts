import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateTrimestreService from '@modules/eEBD/services/CreateTrimestreService';

class TrimestreController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { NAME, START_DATE, FINAL_DATE } = request.body;

    const createTrimestre = container.resolve(CreateTrimestreService);
    const trimestre = await createTrimestre.execute({
      NAME,
      START_DATE,
      FINAL_DATE,
    });

    return response.json(trimestre);
  }
}

export default TrimestreController;
