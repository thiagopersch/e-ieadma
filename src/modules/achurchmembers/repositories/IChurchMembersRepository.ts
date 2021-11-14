import CreateChurchMembersDTO from '../dtos/CreateChurchMembersDTO';

import ChurchMember from '../infra/typeorm/entities/ChurchMember';

export default interface IChurchMembersRepository {
  create: (data: CreateChurchMembersDTO) => Promise<ChurchMember>;
  update: (churchMembers: ChurchMember) => Promise<ChurchMember>;
}
