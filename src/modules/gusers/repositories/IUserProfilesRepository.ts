import FindUserProfileDTO from '../dtos/FindUserProfileDTO';
import CreateUserProfileDTO from '../dtos/CreateUserProfileDTO';

import UserProfile from '../infra/typeorm/entities/UserProfile';

export default interface IUserProfilesRepository {
  findOne: (filters: FindUserProfileDTO) => Promise<UserProfile | undefined>;
  findAll: (filters: FindUserProfileDTO) => Promise<UserProfile[]>;
  create: (data: CreateUserProfileDTO) => Promise<UserProfile>;
  delete: (userProfile: UserProfile) => Promise<void>;
}
