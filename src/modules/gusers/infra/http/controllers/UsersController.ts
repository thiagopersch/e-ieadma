import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import ChangePasswordService from '@modules/gusers/services/ChangePasswordService';
import CountUsersService from '@modules/gusers/services/CountUsersService';
import CreateUserService from '@modules/gusers/services/CreateUserService';
import ListUsersService from '@modules/gusers/services/ListUsersService';
import ShowUserService from '@modules/gusers/services/ShowUserService';

import privateRoute from '@shared/decorators/privateRoute';

class UsersController {
  @privateRoute()
  public async show_me(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { ID } = request.user;

    const showUser = container.resolve(ShowUserService);
    const user = await showUser.execute({ GUSERS_ID: ID });

    return response.json(classToClass(user));
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listUsers = container.resolve(ListUsersService);
    const users = await listUsers.execute();

    return response.json(classToClass(users));
  }

  public async count(request: Request, response: Response): Promise<Response> {
    const countUsers = container.resolve(CountUsersService);
    const countResult = await countUsers.execute();

    return response.json(countResult);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { NAME, EMAIL, BAPTIZED_IN_WATER, BAPTIZED_DATE } = request.body;

    const createUser = container.resolve(CreateUserService);
    const user = await createUser.execute({
      NAME,
      EMAIL,
      PASSWORD: '12345678',
      BAPTIZED_IN_WATER,
      BAPTIZED_DATE,
    });

    return response.json(classToClass(user));
  }

  @privateRoute()
  public async update_password(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { GUSER_ID } = request.params;
    const { PASSWORD } = request.body;
    const { ID: AUTHENTICATED_USER } = request.user;

    const changePassword = container.resolve(ChangePasswordService);
    const user = await changePassword.execute({
      GUSER_ID,
      AUTHENTICATED_USER,
      PASSWORD,
    });

    return response.json(classToClass(user));
  }

  /* @privateRoute()
  public async delete(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.params;
    const { id: authenticated_user } = request.user;

    const deleteUser = container.resolve(DeleteUserService);
    await deleteUser.execute({ user_id, auth_user_id: authenticated_user });

    return response.status(204).send();
  } */
}

export default UsersController;
