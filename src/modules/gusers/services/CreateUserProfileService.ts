import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IAccessLevelsRepository from '@modules/core/repositories/IAccessLevelsRepository';
import IEcclesiasticalFieldRepository from '@modules/gecclesiasticalfield/repositories/IEcclesiasticalFieldRepository';

import UserProfile from '../infra/typeorm/entities/UserProfile';

import IUserProfilesRepository from '../repositories/IUserProfilesRepository';

import IUsersRepository from '../repositories/IUsersRepository';

type CreateUserProfileRequest = {
  GUSERS_ID: string;
  GECCLESIASTICALFIELD_ID: string;
  GACCESSLEVELS_ID?: string;
  GACCESSLEVELS_NAME?: string;
  DEFAULTPROFILE?: boolean;
};

@injectable()
class CreateUserProfileService {
  constructor(
    @inject('UserProfilesRepository')
    private userProfilesRepository: IUserProfilesRepository,
    @inject('EcclesiasticalFieldRepository')
    private ecclesiasticalField: IEcclesiasticalFieldRepository,
    @inject('AccessLevelsRepository')
    private accessLevelsRepository: IAccessLevelsRepository,
    @inject('UsersRepository') private usersRepository: IUsersRepository,
  ) {}

  public async execute({
    GUSERS_ID,
    GECCLESIASTICALFIELD_ID,
    GACCESSLEVELS_ID,
    GACCESSLEVELS_NAME,
  }: CreateUserProfileRequest): Promise<UserProfile> {
    const user = await this.usersRepository.findById(GUSERS_ID);
    if (!user) {
      throw new AppError('User not found');
    }

    const ecclesiasticalField = await this.ecclesiasticalField.findOne({
      ID: GECCLESIASTICALFIELD_ID,
    });
    if (!ecclesiasticalField) {
      throw new AppError('Ecclesiastical Field not found');
    }

    const accessLevel = await this.accessLevelsRepository.findOne({
      ID: GACCESSLEVELS_ID,
      CODE: GACCESSLEVELS_NAME,
    });
    if (!accessLevel) {
      throw new AppError('Access level not found');
    }

    const userProfiles = await this.userProfilesRepository.findAll({
      GUSERS_ID,
    });

    const userProfileAlreadyExists = userProfiles.find(
      userProfile =>
        userProfile.GECCLESIASTICALFIELD_ID === GECCLESIASTICALFIELD_ID &&
        userProfile.GACCESSLEVELS_ID === GACCESSLEVELS_ID,
    );
    if (userProfileAlreadyExists) {
      throw new AppError('User profile already exists');
    }

    const NAME = `${accessLevel.NAME} - ${ecclesiasticalField.NAME}`;

    const userProfile = await this.userProfilesRepository.create({
      GUSERS_ID,
      GECCLESIASTICALFIELD_ID,
      GACCESSLEVELS_ID: accessLevel.ID,
      NAME,
      DEFAULTPROFILE: !userProfiles.length,
    });

    return userProfile;
  }
}

export default CreateUserProfileService;
