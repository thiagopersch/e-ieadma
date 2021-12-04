import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateStudentService from '@modules/eEBD/services/CreateStudentService';

class StudentController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { ACHURCHMEMBERS_ID } = request.body;

    const createStudent = container.resolve(CreateStudentService);
    const student = await createStudent.execute({
      ACHURCHMEMBERS_ID,
    });

    return response.json(student);
  }
}

export default StudentController;
