import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import privateRoute from '@shared/decorators/privateRoute';

import AuthenticateUserService from '@modules/gusers/services/AuthenticateUserService';
import GenerateUserTokenService from '@modules/gusers/services/GenerateUserTokenService';
import ListAccessModulesService from '@modules/core/services/ListAccessUsersModulesService';
import ShowUserService from '@modules/gusers/services/ShowUserService';

class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { EMAIL, PASSWORD } = request.body;

    const authenticateUser = container.resolve(AuthenticateUserService);
    const user = await authenticateUser.execute({ EMAIL, PASSWORD });

    const generateToken = container.resolve(GenerateUserTokenService);
    const { TOKEN, PROFILE } = await generateToken.execute({
      GUSERS_ID: user.ID,
    });

    if (PROFILE) {
      const listAccessModules = container.resolve(ListAccessModulesService);
      const accessModules = await listAccessModules.execute({
        GACCESSLEVELS_ID: PROFILE.GACCESSLEVELS_ID,
      });

      return response.json({
        USER: classToClass(user),
        TOKEN,
        accessModules,
        PROFILE,
      });
    }

    return response.json({
      USER: classToClass(user),
      accessModules: [],
      TOKEN,
    });
  }

  @privateRoute()
  public async update(request: Request, response: Response): Promise<Response> {
    const { profile_id } = request.body;
    const { ID: GUSERS_ID } = request.user;

    const showUser = container.resolve(ShowUserService);
    const user = await showUser.execute({ GUSERS_ID });

    const generateToken = container.resolve(GenerateUserTokenService);
    const { TOKEN, PROFILE } = await generateToken.execute({
      GUSERS_ID: user.ID,
      GUSERPROFILE_ID: profile_id,
    });

    if (PROFILE) {
      const listAccessModules = container.resolve(ListAccessModulesService);
      const accessModules = await listAccessModules.execute({
        GACCESSLEVELS_ID: PROFILE.GACCESSLEVELS_ID,
      });

      return response.json({
        USER: classToClass(user),
        TOKEN,
        accessModules,
        PROFILE,
      });
    }

    return response.json({
      USER: classToClass(user),
      accessModules: [],
      TOKEN,
    });
  }
}

export default SessionsController;
