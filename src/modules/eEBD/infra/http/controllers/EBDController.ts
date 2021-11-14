import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateEBDService from '@modules/eEBD/services/CreateEBDService';

class EBDController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { ETRIMESTRE_ID, DATE, START_TIME, FINAL_TIME } = request.body;

    const createEBD = container.resolve(CreateEBDService);
    const ebd = await createEBD.execute({
      ETRIMESTRE_ID,
      DATE,
      START_TIME,
      FINAL_TIME,
    });

    return response.json(ebd);
  }
}
export default EBDController;
