import CreateClassStudentsService from '@modules/eEBD/services/CreateClassStudentsService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class ClassStudentsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { ECLASS_ID, ESTUDENTS_ID, ELESSONSMAGAZINES_ID } = request.body;

    const createClassStudents = container.resolve(CreateClassStudentsService);
    const classStudents = createClassStudents.execute({
      ECLASS_ID,
      ESTUDENTS_ID,
      ELESSONSMAGAZINES_ID,
    });

    return response.json(classStudents);
  }
}
export default ClassStudentsController;
