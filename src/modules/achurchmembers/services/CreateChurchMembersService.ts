import { inject, injectable } from 'tsyringe';

import ChurchMember from '../infra/typeorm/entities/ChurchMember';

import IChurchMembersRepository from '../repositories/IChurchMembersRepository';

type CreateChurchMembersRequest = {
  GUSERS_ID: string;
  GECCLESIASTICALFIELD_ID: string;
  DISCIPLINE_IN: boolean;
  INITIAL_PERIOD_DISCIPLINE?: Date;
  FINAL_PERIOD_DISCIPLINE?: Date;
  HOLY_SUPPER: boolean;
  MEMBERSHIP_CARD: boolean;
};

@injectable()
class CreateChurchMembersService {
  constructor(
    @inject('ChurchMembersRepository')
    private churchMembersRepository: IChurchMembersRepository,
  ) {}

  public async execute({
    GUSERS_ID,
    GECCLESIASTICALFIELD_ID,
    DISCIPLINE_IN,
    INITIAL_PERIOD_DISCIPLINE,
    FINAL_PERIOD_DISCIPLINE,
    HOLY_SUPPER,
    MEMBERSHIP_CARD,
  }: CreateChurchMembersRequest): Promise<ChurchMember> {
    const churchMembers = await this.churchMembersRepository.create({
      GUSERS_ID,
      GECCLESIASTICALFIELD_ID,
      DISCIPLINE_IN,
      INITIAL_PERIOD_DISCIPLINE,
      FINAL_PERIOD_DISCIPLINE,
      HOLY_SUPPER,
      MEMBERSHIP_CARD,
    });

    return churchMembers;
  }
}

export default CreateChurchMembersService;
