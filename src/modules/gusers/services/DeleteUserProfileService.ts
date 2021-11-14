import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IUserProfilesRepository from '../repositories/IUserProfilesRepository';

type DeleteUserProfileRequest = {
  GUSERPROFILE_ID?: string;
  GUSERS_ID?: string;
  GECCLESIASTICALFIELD_ID?: string;
  GACCESSLEVELS_ID?: string;
  GACCESSLEVELS_NAME: string;
};

@injectable()
class DeleteUserProfileService {
  constructor(
    @inject('UserProfilesRepository')
    private userProfilesRepository: IUserProfilesRepository,
  ) {}

  public async execute({
    GUSERPROFILE_ID,
    GUSERS_ID,
    GECCLESIASTICALFIELD_ID,
    GACCESSLEVELS_ID,
    GACCESSLEVELS_NAME,
  }: DeleteUserProfileRequest): Promise<void> {
    const userProfile = GUSERPROFILE_ID
      ? await this.userProfilesRepository.findOne({
          ID: GUSERPROFILE_ID,
        })
      : await this.userProfilesRepository.findOne({
          GUSERS_ID,
          GECCLESIASTICALFIELD_ID,
          GACCESSLEVELS_ID,
          GACCESSLEVELS_NAME,
        });

    if (!userProfile) {
      throw new AppError('Profile not fount');
    }

    await this.userProfilesRepository.delete(userProfile);
  }
}

export default DeleteUserProfileService;
