import { inject, injectable } from 'tsyringe';
import { sign } from 'jsonwebtoken';

import authConfig from '@config/auth';
import AppError from '@shared/errors/AppError';

import UserProfile from '../infra/typeorm/entities/UserProfile';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';
import IUserProfilesRepository from '../repositories/IUserProfilesRepository';

type GenerateUserTokenRequest = {
  GUSERS_ID: string;
  GUSERPROFILE_ID?: string;
};

type GenerateUserTokenResponse = {
  TOKEN: string;
  PROFILE?: UserProfile;
};

@injectable()
class GenerateUserTokenService {
  constructor(
    @inject('UserProfilesRepository')
    private userProfilesRepository: IUserProfilesRepository,
    @inject('HashProvider') private hashProvider: IHashProvider,
  ) {}

  public async execute({
    GUSERS_ID,
    GUSERPROFILE_ID,
  }: GenerateUserTokenRequest): Promise<GenerateUserTokenResponse> {
    const userProfile = GUSERPROFILE_ID
      ? await this.userProfilesRepository.findOne({ ID: GUSERPROFILE_ID })
      : await this.userProfilesRepository.findOne({
          GUSERS_ID,
          DEFAULTPROFILE: true,
        });

    if (GUSERPROFILE_ID && !userProfile) {
      throw new AppError('Profile not found');
    }

    const { secret, expiresIn } = authConfig.jwt;
    const TOKEN = sign({ pfl: userProfile?.ID }, secret, {
      subject: GUSERS_ID,
      expiresIn,
    });

    return { TOKEN, PROFILE: userProfile };
  }
}

export default GenerateUserTokenService;
