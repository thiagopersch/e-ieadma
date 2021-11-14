import { getRepository, Repository } from 'typeorm';

import CreateChurchMembersDTO from '@modules/achurchmembers/dtos/CreateChurchMembersDTO';

import IChurchMembersRepository from '@modules/achurchmembers/repositories/IChurchMembersRepository';
import ChurchMember from '../entities/ChurchMember';

class ChurchMembersRepository implements IChurchMembersRepository {
  private ormRepository: Repository<ChurchMember>;

  constructor() {
    this.ormRepository = getRepository(ChurchMember);
  }

  public async create({
    GUSERS_ID,
    GECCLESIASTICALFIELD_ID,
    DISCIPLINE_IN,
    INITIAL_PERIOD_DISCIPLINE,
    FINAL_PERIOD_DISCIPLINE,
    HOLY_SUPPER,
    MEMBERSHIP_CARD,
  }: CreateChurchMembersDTO): Promise<ChurchMember> {
    const churchMembers = this.ormRepository.create({
      GUSERS_ID,
      GECCLESIASTICALFIELD_ID,
      DISCIPLINE_IN,
      INITIAL_PERIOD_DISCIPLINE,
      FINAL_PERIOD_DISCIPLINE,
      HOLY_SUPPER,
      MEMBERSHIP_CARD,
    });
    await this.ormRepository.save(churchMembers);

    return churchMembers;
  }

  public async update(churchMembers: ChurchMember): Promise<ChurchMember> {
    await this.ormRepository.save(churchMembers);
    return churchMembers;
  }
}

export default ChurchMembersRepository;
