import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateStudentClassCallDetailService from '@modules/eEBD/services/CreateStudentClassCallDetailService';

class StudentClassCallDetailController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      ECLASSSTUDENTS_ID,
      PRESENCE,
      BIBLE,
      MAGAZINE,
      OFFER,
      ABSENCE_DATE,
    } = request.body;

    const createStudentClassCallDetals = container.resolve(
      CreateStudentClassCallDetailService,
    );
    const studentClassCallDetals = await createStudentClassCallDetals.execute({
      ECLASSSTUDENTS_ID,
      PRESENCE,
      BIBLE,
      MAGAZINE,
      OFFER,
      ABSENCE_DATE,
    });

    return response.json(studentClassCallDetals);
  }
}

export default StudentClassCallDetailController;
