import { Request, Response } from 'express';
import { container } from 'tsyringe';

import privateRoute from '@shared/decorators/privateRoute';

import CreateEcclesiasticalFieldService from '@modules/gecclesiasticalfield/services/CreateEcclesiasticalFieldService';
import ShowEcclesiasticalFieldService from '@modules/gecclesiasticalfield/services/ShowEcclesiasticalFieldService';
import ListEcclesiasticalFieldService from '@modules/gecclesiasticalfield/services/ListEcclesiasticalFieldService';

import BranchType from '@shared/infra/typeorm/enums/Branch';

class EcclesiasticalFieldController {
  @privateRoute({
    MODULE: 'GECCLESIASTICALFIELD',
    RULE: 'WRITE',
  })
  public async show(request: Request, response: Response): Promise<Response> {
    const { ECCLESIASTICALFIELD_ID } = request.params;
    const { TYPE, ECCLESIASTICALFIELD_ID: queryEcclesiasticalfieldId } =
      request.query;

    const ecclesiasticalFieldId =
      ECCLESIASTICALFIELD_ID || (queryEcclesiasticalfieldId as string);

    const showEcclesiasticalfield = container.resolve(
      ShowEcclesiasticalFieldService,
    );
    const ecclesiasticalfield = await showEcclesiasticalfield.execute({
      ECCLESIASTICALFIELD_ID: ecclesiasticalFieldId,
      PROFILEECCLESIASTICALFIELD_ID: request.profile.GECCLESIASTICALFIELD_ID,
      TYPE: TYPE as BranchType,
    });

    return response.json(ecclesiasticalfield);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listEcclesiasticalField = container.resolve(
      ListEcclesiasticalFieldService,
    );
    const ecclesiasticalField = await listEcclesiasticalField.execute();

    return response.json(ecclesiasticalField);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const {
      NAME,
      TYPE,
      STREET,
      NUMBER,
      DISTRICT,
      COMPLEMENT,
      CEP,
      CITY,
      STATE,
      COUNTRY,
      PHONE,
      PHONE_TWO,
      PHONE_THREE,
    } = request.body;

    const createEcclesiasticalField = container.resolve(
      CreateEcclesiasticalFieldService,
    );
    const ecclesiasticalField = await createEcclesiasticalField.execute({
      NAME,
      TYPE,
      STREET,
      NUMBER,
      DISTRICT,
      COMPLEMENT,
      CEP,
      CITY,
      STATE,
      COUNTRY,
      PHONE,
      PHONE_TWO,
      PHONE_THREE,
    });

    return response.json(ecclesiasticalField);
  }
}

export default EcclesiasticalFieldController;
