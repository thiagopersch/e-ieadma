import CreateEBDClassService from '@modules/eEBD/services/CreateEBDClassService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class EBDClassController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { ECLASS_ID, EEBD_ID } = request.body;

    const createEBDClass = container.resolve(CreateEBDClassService);
    const EBDClass = createEBDClass.execute({
      ECLASS_ID,
      EEBD_ID,
    });

    return response.json(EBDClass);
  }
}
export default EBDClassController;
