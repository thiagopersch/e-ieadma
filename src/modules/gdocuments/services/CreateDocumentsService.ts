import { inject, injectable } from 'tsyringe';

import Nationality from '@shared/infra/typeorm/enums/Nationality';
import Document from '../infra/typeorm/entities/Document';

import IDocumentsRepository from '../repositories/IDocumentsRepository';

type CreateDocumentsRequest = {
  GUSERS_ID: string;
  GENERAL_RECORD: string;
  SHIPPING_DATE: Date;
  BIRTH_DATE: Date;
  CPF: string;
  GCIVILSTATUS_ID: string;
  GPARENTAGE_ID: string;
  SEX: string;
  FORMATION?: string;
  GCOLORRACE_ID: string;
  NATURALNESS: string;
  NATIONALITY: Nationality;
  SOURCE_DOCUMENT?: string;
  VOTER_REGISTRATION_NUMBER?: string;
  ZONE?: string;
  SESSION?: string;
  CITY?: string;
  UF?: string;
  ISSUANCE_DATE?: Date;
  PHONE: string;
  PHONE_TWO?: string;
  PHONE_THREE?: string;
};

@injectable()
class CreateDocumentsService {
  constructor(
    @inject('DocumentsRepository') private documents: IDocumentsRepository,
  ) {}

  public async execute({
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
  }: CreateDocumentsRequest): Promise<Document> {
    const documents = await this.documents.create({
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

    return documents;
  }
}

export default CreateDocumentsService;
