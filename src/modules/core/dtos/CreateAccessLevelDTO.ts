import BranchType from '@shared/infra/typeorm/enums/Branch';

type CreateAccessLevelDTO = {
  NAME: string;
  CODE: string;
  ONLYON: BranchType;
};

export default CreateAccessLevelDTO;
