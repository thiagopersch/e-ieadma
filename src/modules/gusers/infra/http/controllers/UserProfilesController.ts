import { Request, Response } from 'express';
import { container } from 'tsyringe';

import privateRoute from '@shared/decorators/privateRoute';

import ListUserProfilesService from '@modules/gusers/services/ListUserProfilesService';
import CreateUserProfileService from '@modules/gusers/services/CreateUserProfileService';
import DeleteUserProfileService from '@modules/gusers/services/DeleteUserProfileService';

class UserProfilesController {
  @privateRoute()
  public async index(request: Request, response: Response): Promise<Response> {
    const { USERID } = request.query;

    const listUserProfiles = container.resolve(ListUserProfilesService);
    const userProfiles = await listUserProfiles.execute({
      GUSERS_ID: USERID as string,
    });

    return response.json(userProfiles);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { GUSERS_ID, GECCLESIASTICALFIELD_ID, GACCESSLEVELS_ID, accessCode } =
      request.body;

    const createUserProfile = container.resolve(CreateUserProfileService);

    const userProfile = await createUserProfile.execute({
      GUSERS_ID,
      GECCLESIASTICALFIELD_ID,
      GACCESSLEVELS_ID,
      GACCESSLEVELS_NAME: accessCode,
    });

    return response.json(userProfile);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { GUSERPROFILE_ID } = request.params;
    const { GUSERS_ID, GECCLESIASTICALFIELD_ID, GACCESSLEVELS_ID, accessCode } =
      request.body;

    const deleteUserProfile = container.resolve(DeleteUserProfileService);
    await deleteUserProfile.execute({
      GUSERPROFILE_ID,
      GUSERS_ID,
      GECCLESIASTICALFIELD_ID,
      GACCESSLEVELS_ID,
      GACCESSLEVELS_NAME: accessCode,
    });

    return response.status(204).send();
  }
}

export default UserProfilesController;
