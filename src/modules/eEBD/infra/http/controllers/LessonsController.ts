import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateLessonService from '@modules/eEBD/services/CreateLessonService';

class LessonsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { LESSON_CODE, TITLE, DATE, PAGE } = request.body;

    const createLesson = container.resolve(CreateLessonService);
    const lesson = await createLesson.execute({
      LESSON_CODE,
      TITLE,
      DATE,
      PAGE,
    });

    return response.json(lesson);
  }
}

export default LessonsController;
