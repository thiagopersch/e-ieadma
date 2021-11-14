import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateChurchMembersService from '@modules/achurchmembers/services/CreateChurchMembersService';

class ChurchMembersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      GUSERS_ID,
      GECCLESIASTICALFIELD_ID,
      DISCIPLINE_IN,
      INITIAL_PERIOD_DISCIPLINE,
      FINAL_PERIOD_DISCIPLINE,
      HOLY_SUPPER,
      MEMBERSHIP_CARD,
    } = request.body;

    const createChurchMembers = container.resolve(CreateChurchMembersService);
    const churchMembers = await createChurchMembers.execute({
      GUSERS_ID,
      GECCLESIASTICALFIELD_ID,
      DISCIPLINE_IN,
      INITIAL_PERIOD_DISCIPLINE,
      FINAL_PERIOD_DISCIPLINE,
      HOLY_SUPPER,
      MEMBERSHIP_CARD,
    });

    return response.json(churchMembers);
  }
}

export default ChurchMembersController;
