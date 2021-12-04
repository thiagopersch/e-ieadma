import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateLessonMagazinesService from '@modules/eEBD/services/CreateLessonMagazinesService';

class LessonMagazinesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { EMAGAZINES_ID, ELESSONS_ID } = request.body;

    const createLessonMagazines = container.resolve(
      CreateLessonMagazinesService,
    );
    const lessonMagazines = await createLessonMagazines.execute({
      ELESSONS_ID,
      EMAGAZINES_ID,
    });

    return response.json(lessonMagazines);
  }
}

export default LessonMagazinesController;
