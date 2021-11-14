type CreateUserDTO = {
  NAME: string;
  EMAIL: string;
  PASSWORD: string;
  BAPTIZED_IN_WATER: boolean;
  BAPTIZED_DATE?: Date;
};

export default CreateUserDTO;
