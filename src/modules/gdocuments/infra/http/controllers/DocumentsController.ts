import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateDocumentsService from '@modules/gdocuments/services/CreateDocumentsService';

class DocumentsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      GUSERS_ID,
      GENERAL_RECORD,
      SHIPPING_DATE,
      BIRTH_DATE,
      CPF,
      GCIVILSTATUS_ID,
      GPARENTAGE_ID,
      SEX,
      FORMATION,
      GCOLORRACE_ID,
      NATURALNESS,
      NATIONALITY,
      SOURCE_DOCUMENT,
      VOTER_REGISTRATION_NUMBER,
      ZONE,
      SESSION,
      CITY,
      UF,
      ISSUANCE_DATE,
      PHONE,
      PHONE_TWO,
      PHONE_THREE,
    } = request.body;

    const createDocument = container.resolve(CreateDocumentsService);

    const document = await createDocument.execute({
      GUSERS_ID,
      GENERAL_RECORD,
      SHIPPING_DATE,
      BIRTH_DATE,
      CPF,
      GCIVILSTATUS_ID,
      GPARENTAGE_ID,
      SEX,
      FORMATION,
      GCOLORRACE_ID,
      NATURALNESS,
      NATIONALITY,
      SOURCE_DOCUMENT,
      VOTER_REGISTRATION_NUMBER,
      ZONE,
      SESSION,
      CITY,
      UF,
      ISSUANCE_DATE,
      PHONE,
      PHONE_TWO,
      PHONE_THREE,
    });

    return response.json(document);
  }
}

export default DocumentsController;
