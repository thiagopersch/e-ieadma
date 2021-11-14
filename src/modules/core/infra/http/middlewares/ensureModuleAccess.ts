import { container } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import UserProfile from '@modules/gusers/infra/typeorm/entities/UserProfile';

import ShowUserProfileService from '@modules/gusers/services/ShowUserProfileService';
import VerifyProfileAccessService from '@modules/core/services/VerifyProfileAccessService';

import AccessUserModule from '../../typeorm/entities/AccessUserModule';

type EnsureModuleAccessRequest = {
  MODULE: string;
  GUSERPROFILE_ID?: string;
  RULE?: 'READ' | 'WRITE';
};

type EnsureModuleAccessResponse = {
  userProfile: UserProfile;
  accessModule: AccessUserModule;
};

const ensureModuleAccess = async ({
  GUSERPROFILE_ID,
  MODULE,
  RULE,
}: EnsureModuleAccessRequest): Promise<EnsureModuleAccessResponse> => {
  const showUserProfile = container.resolve(ShowUserProfileService);
  const userProfile = await showUserProfile.execute({ GUSERPROFILE_ID });

  const verifyProfileAccess = container.resolve(VerifyProfileAccessService);
  const accessModule = await verifyProfileAccess.execute({
    GACCESSLEVELS_ID: userProfile.GACCESSLEVELS_ID,
    MODULE,
  });

  if (RULE) {
    if (RULE === 'READ' && !accessModule.READ) {
      throw new AppError('You dont has access to this module');
    }
    if (RULE === 'WRITE' && !accessModule.WRITE) {
      throw new AppError('You dont has access to this module');
    }
  }

  return { userProfile, accessModule };
};

export default ensureModuleAccess;
