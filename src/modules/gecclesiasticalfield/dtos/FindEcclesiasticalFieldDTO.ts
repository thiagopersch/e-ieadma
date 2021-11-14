import BranchType from '@shared/infra/typeorm/enums/Branch';

type FindEcclesiasticalFieldDTO = {
  ID?: string;
  TYPE?: BranchType;
};

export default FindEcclesiasticalFieldDTO;
