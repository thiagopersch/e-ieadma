import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateStudentClassCallDetailsTotalService from '@modules/eEBD/services/CreateStudentClassCallDetailsTotalService';

class StudentClassCallDetailsTotalController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      ECLASS_ID,
      PRESENCES,
      BIBLES,
      MAGAZINES,
      OFFER,
      VISITOR_QUANTITY,
      REGISTERED,
      PERCENTAGE,
    } = request.body;

    const createStudentClassCallDetalsTotal = container.resolve(
      CreateStudentClassCallDetailsTotalService,
    );
    const studentClassCallDetalsTotal =
      await createStudentClassCallDetalsTotal.execute({
        ECLASS_ID,
        PRESENCES,
        BIBLES,
        MAGAZINES,
        OFFER,
        VISITOR_QUANTITY,
        REGISTERED,
        PERCENTAGE,
      });

    return response.json(studentClassCallDetalsTotal);
  }
}

export default StudentClassCallDetailsTotalController;
