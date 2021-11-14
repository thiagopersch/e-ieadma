import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import UserProfile from '../infra/typeorm/entities/UserProfile';
import IUserProfilesRepository from '../repositories/IUserProfilesRepository';

type FindUserProfileRequest = {
  GUSERPROFILE_ID?: string;
};

@injectable()
class ShowUserProfileService {
  constructor(
    @inject('UserProfilesRepository')
    private userProfilesRepository: IUserProfilesRepository,
  ) {}

  public async execute({
    GUSERPROFILE_ID,
  }: FindUserProfileRequest): Promise<UserProfile> {
    if (!GUSERPROFILE_ID) {
      throw new AppError('You dont have an profile', 401);
    }

    const userProfile = await this.userProfilesRepository.findOne({
      ID: GUSERPROFILE_ID,
    });

    if (!userProfile) {
      throw new AppError('Profile not exist');
    }

    return userProfile;
  }
}

export default ShowUserProfileService;
