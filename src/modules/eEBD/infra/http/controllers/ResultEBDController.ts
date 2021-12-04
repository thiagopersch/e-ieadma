import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateResultEBDService from '@modules/eEBD/services/CreateResultEBDService';

class ResultEBDController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      GUSERS_ID,
      EEBD_ID,
      ECLASS_ID,
      DATE,
      PRESENCE_TOTAL,
      BIBLES_TOTAL,
      MAGAZINES_TOTAL,
      OFFER_TOTAL,
      VISITOR_QUANTITY_TOTAL,
      REGISTERED_TOTAL,
      PERCENTAGE_TOTAL,
    } = request.body;

    const createResultEBD = container.resolve(CreateResultEBDService);
    const resultEBD = await createResultEBD.execute({
      GUSERS_ID,
      EEBD_ID,
      ECLASS_ID,
      DATE,
      PRESENCE_TOTAL,
      BIBLES_TOTAL,
      MAGAZINES_TOTAL,
      OFFER_TOTAL,
      VISITOR_QUANTITY_TOTAL,
      REGISTERED_TOTAL,
      PERCENTAGE_TOTAL,
    });

    return response.json(resultEBD);
  }
}

export default ResultEBDController;
