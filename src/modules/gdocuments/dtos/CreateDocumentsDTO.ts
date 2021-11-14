import Nationality from '@shared/infra/typeorm/enums/Nationality';

type CreateDocumentsDTO = {
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

export default CreateDocumentsDTO;
