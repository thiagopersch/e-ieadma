import { getRepository, Repository } from 'typeorm';

import CreateDocumentsDTO from '@modules/gdocuments/dtos/CreateDocumentsDTO';

import IDocumentsRepository from '@modules/gdocuments/repositories/IDocumentsRepository';
import Document from '../entities/Document';

class DocumentsRepository implements IDocumentsRepository {
  private ormRepository: Repository<Document>;

  constructor() {
    this.ormRepository = getRepository(Document);
  }

  public async create({
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
  }: CreateDocumentsDTO): Promise<Document> {
    const document = this.ormRepository.create({
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
    await this.ormRepository.save(document);

    return document;
  }
}

export default DocumentsRepository;
