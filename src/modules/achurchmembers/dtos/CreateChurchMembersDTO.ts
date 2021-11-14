type CreateChurchMembersDTO = {
  GUSERS_ID: string;
  GECCLESIASTICALFIELD_ID: string;
  DISCIPLINE_IN: boolean;
  INITIAL_PERIOD_DISCIPLINE?: Date;
  FINAL_PERIOD_DISCIPLINE?: Date;
  HOLY_SUPPER: boolean;
  MEMBERSHIP_CARD: boolean;
};

export default CreateChurchMembersDTO;
