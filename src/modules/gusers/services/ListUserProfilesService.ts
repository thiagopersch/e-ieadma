import { inject, injectable } from 'tsyringe';

import UserProfile from '../infra/typeorm/entities/UserProfile';
import IUserProfilesRepository from '../repositories/IUserProfilesRepository';

type ListUserProfilesRequest = {
  GUSERS_ID: string;
};

@injectable()
class ListUserProfilesService {
  constructor(
    @inject('UserProfilesRepository')
    private userProfilesRepository: IUserProfilesRepository,
  ) {}

  public async execute({
    GUSERS_ID,
  }: ListUserProfilesRequest): Promise<UserProfile[]> {
    const userProfiles = await this.userProfilesRepository.findAll({
      GUSERS_ID,
    });

    return userProfiles;
  }
}

export default ListUserProfilesService;
