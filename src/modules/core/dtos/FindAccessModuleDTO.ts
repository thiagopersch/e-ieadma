type FindAccessModuleDTO = {
  ID?: string;
  GACCESSLEVELS_ID?: string | string[];
  GAPPMODULES_ID?: string | string[];
  GAPPMODULES_NAME?: string;
  READ?: boolean;
  WRITE?: boolean;
};

export default FindAccessModuleDTO;
