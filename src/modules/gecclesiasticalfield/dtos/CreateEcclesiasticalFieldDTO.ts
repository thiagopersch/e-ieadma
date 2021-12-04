import BranchType from '@shared/infra/typeorm/enums/Branch';

type CreateEcclesiasticalFieldDTO = {
  NAME: string;
  TYPE: BranchType;
  STREET: string;
  NUMBER: string;
  DISTRICT: string;
  COMPLEMENT?: string;
  CEP: string;
  CITY: string;
  STATE: string;
  COUNTRY: string;
  PHONE: string;
  PHONE_TWO?: string;
  PHONE_THREE?: string;
};

export default CreateEcclesiasticalFieldDTO;
