import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateColorRaceService from '@modules/gdocuments/services/CreateColorRaceService';

class ColorRaceController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { NAME } = request.body;

    const createColorRace = container.resolve(CreateColorRaceService);

    const colorRace = await createColorRace.execute({ NAME });

    return response.json(colorRace);
  }
}

export default ColorRaceController;
