import BranchType from '@shared/infra/typeorm/enums/Branch';

type CreateEcclesiasticalFieldDTO = {
  NAME: string;
  LOCATION: string;
  TYPE: BranchType;
};

export default CreateEcclesiasticalFieldDTO;
