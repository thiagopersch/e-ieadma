import {
  FindConditions,
  getRepository,
  ObjectLiteral,
  Repository,
  WhereExpression,
} from 'typeorm';

import FindUserProfileDTO from '@modules/gusers/dtos/FindUserProfileDTO';
import CreateUserProfileDTO from '@modules/gusers/dtos/CreateUserProfileDTO';
import IUserProfilesRepository from '@modules/gusers/repositories/IUserProfilesRepository';

import UserProfile from '../entities/UserProfile';

type AndWhere = {
  condition: string;
  parameters?: ObjectLiteral;
};

class UserProfilesRepository implements IUserProfilesRepository {
  private ormRepository: Repository<UserProfile>;

  constructor() {
    this.ormRepository = getRepository(UserProfile);
  }

  public async findOne({
    ID,
    GUSERS_ID,
    GECCLESIASTICALFIELD_ID,
    GACCESSLEVELS_ID,
    GACCESSLEVELS_NAME,
    DEFAULTPROFILE: isDefault,
  }: FindUserProfileDTO): Promise<UserProfile | undefined> {
    const where: FindConditions<UserProfile> = {};
    const andWhere: AndWhere[] = [];

    if (ID) where.ID = ID;
    if (GUSERS_ID) where.GUSERS_ID = GUSERS_ID;
    if (GECCLESIASTICALFIELD_ID)
      where.GECCLESIASTICALFIELD_ID = GECCLESIASTICALFIELD_ID;
    if (GACCESSLEVELS_ID) where.GACCESSLEVELS_ID = GACCESSLEVELS_ID;
    if (isDefault) where.DEFAULTPROFILE = isDefault;

    if (GACCESSLEVELS_NAME) {
      andWhere.push({
        condition: 'GACCESSLEVELS.CODE = :ACCESSLEVELSCODE',
        parameters: { ACCESSLEVELSCODE: GACCESSLEVELS_NAME },
      });
    }

    const userProfile = await this.ormRepository.findOne({
      join: {
        alias: 'GUSERPROFILES',
        leftJoinAndSelect: {
          GACCESSLEVELS_ID: 'GUSERPROFILES.GACCESSLEVELS',
          GECCLESIASTICALFIELD_ID: 'GUSERPROFILES.GECCLESIASTICALFIELD',
        },
      },
      where: (qb: WhereExpression) => {
        qb.where(where);

        andWhere.forEach(({ condition, parameters }) =>
          qb.andWhere(condition, parameters),
        );
      },
    });

    return userProfile;
  }

  public async findAll({
    ID,
    GUSERS_ID,
    GECCLESIASTICALFIELD_ID,
    GACCESSLEVELS_ID,
    GACCESSLEVELS_NAME,
    DEFAULTPROFILE: isDefault,
  }: FindUserProfileDTO): Promise<UserProfile[]> {
    const where: FindConditions<UserProfile> = {};
    const andWhere: AndWhere[] = [];

    if (ID) where.ID = ID;
    if (GUSERS_ID) where.GUSERS_ID = GUSERS_ID;
    if (GECCLESIASTICALFIELD_ID)
      where.GECCLESIASTICALFIELD_ID = GECCLESIASTICALFIELD_ID;
    if (GACCESSLEVELS_ID) where.GACCESSLEVELS_ID = GACCESSLEVELS_ID;
    if (isDefault) where.DEFAULTPROFILE = isDefault;

    if (GACCESSLEVELS_NAME) {
      andWhere.push({
        condition: 'GACCESSLEVELS.CODE = :ACCESSLEVELSCODE',
        parameters: { ACCESSLEVELSCODE: GACCESSLEVELS_NAME },
      });
    }

    const userProfiles = await this.ormRepository.find({
      join: {
        alias: 'GUSERPROFILES',
        leftJoinAndSelect: {
          GACCESSLEVELS_ID: 'GUSERPROFILES.GACCESSLEVELS',
          GECCLESIASTICALFIELD_ID: 'GUSERPROFILES.GECCLESIASTICALFIELD',
        },
      },
      where: (qb: WhereExpression) => {
        qb.where(where);

        andWhere.forEach(({ condition, parameters }) =>
          qb.andWhere(condition, parameters),
        );
      },
    });

    return userProfiles;
  }

  public async create({
    NAME,
    GUSERS_ID,
    GECCLESIASTICALFIELD_ID,
    GACCESSLEVELS_ID,
    DEFAULTPROFILE,
  }: CreateUserProfileDTO): Promise<UserProfile> {
    const userProfile = this.ormRepository.create({
      NAME,
      GUSERS_ID,
      GECCLESIASTICALFIELD_ID,
      GACCESSLEVELS_ID,
      DEFAULTPROFILE,
    });
    await this.ormRepository.save(userProfile);

    return userProfile;
  }

  public async delete(userProfile: UserProfile): Promise<void> {
    await this.ormRepository.remove(userProfile);
  }
}

export default UserProfilesRepository;
