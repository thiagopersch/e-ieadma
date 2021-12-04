import { container } from 'tsyringe';

import IUsersRepository from '@modules/gusers/repositories/IUsersRepository';
import UsersRepository from '@modules/gusers/infra/typeorm/repositories/UsersRepository';

import IUserProfilesRepository from '@modules/gusers/repositories/IUserProfilesRepository';
import UserProfilesRepository from '@modules/gusers/infra/typeorm/repositories/UserProfilesRepository';

import IHashProvider from '@modules/gusers/providers/HashProvider/models/IHashProvider';
import BCryptHashProvider from '@modules/gusers/providers/HashProvider/implementations/BCryptHashProvider';

import IModulesRepository from '@modules/zmodules/repositories/IModulesRepository';
import ModulesRepository from '@modules/zmodules/infra/typeorm/repositories/ModulesRepository';

import IParentageTypeRepository from '@modules/gdocuments/repositories/IParentageTypeRepository';
import ParentageTypeRepository from '@modules/gdocuments/infra/typeorm/repositories/ParentageTypeRepository';

import ICivilStatusRepository from '@modules/gdocuments/repositories/ICivilStatusRepository';
import CivilStatusRepository from '@modules/gdocuments/infra/typeorm/repositories/CivilStatusRepository';

import IColorRaceRepository from '@modules/gdocuments/repositories/IColorRaceRepository';
import ColorRaceRepository from '@modules/gdocuments/infra/typeorm/repositories/ColorRaceRepository';

import IParentageRepository from '@modules/gdocuments/repositories/IParentageRepository';
import ParentageRepository from '@modules/gdocuments/infra/typeorm/repositories/ParentageRepository';

import IDocumentsRepository from '@modules/gdocuments/repositories/IDocumentsRepository';
import DocumentsRepository from '@modules/gdocuments/infra/typeorm/repositories/DocumentsRepository';

import IAddressRepository from '@modules/gaddress/repositories/IAddressRepository';
import AddressRepository from '@modules/gaddress/infra/typeorm/repositories/AddressRepository';

import IEcclesiasticalFieldRepository from '@modules/gecclesiasticalfield/repositories/IEcclesiasticalFieldRepository';
import EcclesiasticalFieldRepository from '@modules/gecclesiasticalfield/infra/typeorm/repositories/EcclesiasticalFieldRepository';

import IAccessLevelsRepository from '@modules/core/repositories/IAccessLevelsRepository';
import AccessLevelsRepository from '@modules/core/infra/typeorm/repositories/AccessLevelsRepository';

import IAccessUsersModulesRepository from '@modules/core/repositories/IAccessUsersModulesRepository';
import AccessUsersModulesRepository from '@modules/core/infra/typeorm/repositories/AccessUsersModulesRepository';

import IAppModulesRepository from '@modules/core/repositories/IAppModulesRepository';
import AppModulesRepository from '@modules/core/infra/typeorm/repositories/AppModulesRepository';

import IChurchMembersRepository from '@modules/achurchmembers/repositories/IChurchMembersRepository';
import ChurchMembersRepository from '@modules/achurchmembers/infra/typeorm/repositories/ChurchMembersRepository';

import ITrimestreRepository from '@modules/eEBD/repositories/ITrimestreRepository';
import TrimestreRepository from '@modules/eEBD/infra/typeorm/repositories/TrimestreRepository';

import IEBDRepository from '@modules/eEBD/repositories/IEBDRepository';
import EBDRepository from '@modules/eEBD/infra/typeorm/repositories/EBDRepository';

import IClassTypeRepository from '@modules/eEBD/repositories/IClassTypeRepository';
import ClassTypeRepository from '@modules/eEBD/infra/typeorm/repositories/ClassTypeRepository';

import IClassRepository from '@modules/eEBD/repositories/IClassRepository';
import ClassRepository from '@modules/eEBD/infra/typeorm/repositories/ClassRepository';

import IEBDClassRepository from '@modules/eEBD/repositories/IEBDClassRepository';
import EBDClassRepository from '@modules/eEBD/infra/typeorm/repositories/EBDClassRepository';

import IMagazineTypeRepository from '@modules/eEBD/repositories/IMagazineTypeRepository';
import MagazineTypeRepository from '@modules/eEBD/infra/typeorm/repositories/MagazineTypeRepository';

import IMagazineRepository from '@modules/eEBD/repositories/IMagazineRepository';
import MagazineRepository from '@modules/eEBD/infra/typeorm/repositories/MagazineRepository';

import ILessonMagazinesRepository from '@modules/eEBD/repositories/ILessonMagazinesRepository';
import LessonMagazinesRepository from '@modules/eEBD/infra/typeorm/repositories/LessonMagazinesRepository';

import LessonRepository from '@modules/eEBD/infra/typeorm/repositories/LessonRepository';
import ILessonRepository from '@modules/eEBD/repositories/ILessonRepository';

import IStudentsRepository from '@modules/eEBD/repositories/IStudentsRepository';
import StudentRepository from '@modules/eEBD/infra/typeorm/repositories/StudentRepository';

import IClassStudentsRepository from '@modules/eEBD/repositories/IClassStudentsRepository';
import ClassStudentsRepository from '@modules/eEBD/infra/typeorm/repositories/ClassStudentsRepository';

import IStudentClassCallDetailRepository from '@modules/eEBD/repositories/IStudentClassCallDetailRepository';
import StudentClassCallDetailRepository from '@modules/eEBD/infra/typeorm/repositories/StudentClassCallDetailRepository';

import IStudentClassCallDetailsTotalRepository from '@modules/eEBD/repositories/IStudentClassCallDetailsTotalRepository';
import StudentClassCallDetailsTotalRepository from '@modules/eEBD/infra/typeorm/repositories/StudentClassCallDetailsTotalRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IUserProfilesRepository>(
  'UserProfilesRepository',
  UserProfilesRepository,
);

container.registerSingleton<IModulesRepository>(
  'ModulesRepository',
  ModulesRepository,
);

container.registerSingleton<IParentageTypeRepository>(
  'ParentageTypeRepository',
  ParentageTypeRepository,
);

container.registerSingleton<ICivilStatusRepository>(
  'CivilStatusRepository',
  CivilStatusRepository,
);

container.registerSingleton<IColorRaceRepository>(
  'ColorRaceRepository',
  ColorRaceRepository,
);

container.registerSingleton<IParentageRepository>(
  'ParentageRepository',
  ParentageRepository,
);

container.registerSingleton<IDocumentsRepository>(
  'DocumentsRepository',
  DocumentsRepository,
);

container.registerSingleton<IAddressRepository>(
  'AddressRepository',
  AddressRepository,
);

container.registerSingleton<IEcclesiasticalFieldRepository>(
  'EcclesiasticalFieldRepository',
  EcclesiasticalFieldRepository,
);

container.registerSingleton<IAccessLevelsRepository>(
  'AccessLevelsRepository',
  AccessLevelsRepository,
);

container.registerSingleton<IAccessUsersModulesRepository>(
  'AccessUsersModulesRepository',
  AccessUsersModulesRepository,
);

container.registerSingleton<IAppModulesRepository>(
  'AppModulesRepository',
  AppModulesRepository,
);

container.registerSingleton<IChurchMembersRepository>(
  'ChurchMembersRepository',
  ChurchMembersRepository,
);

container.registerSingleton<ITrimestreRepository>(
  'TrimestreRepository',
  TrimestreRepository,
);

container.registerSingleton<IEBDRepository>('EBDRepository', EBDRepository);

container.registerSingleton<IClassTypeRepository>(
  'ClassTypeRepository',
  ClassTypeRepository,
);

container.registerSingleton<IClassRepository>(
  'ClassRepository',
  ClassRepository,
);

container.registerSingleton<IEBDClassRepository>(
  'EBDClassRepository',
  EBDClassRepository,
);

container.registerSingleton<IMagazineTypeRepository>(
  'MagazineTypeRepository',
  MagazineTypeRepository,
);

container.registerSingleton<IMagazineRepository>(
  'MagazineRepository',
  MagazineRepository,
);

container.registerSingleton<ILessonRepository>(
  'LessonRepository',
  LessonRepository,
);

container.registerSingleton<ILessonMagazinesRepository>(
  'LessonMagazinesRepository',
  LessonMagazinesRepository,
);

container.registerSingleton<IStudentsRepository>(
  'StudentRepository',
  StudentRepository,
);

container.registerSingleton<IClassStudentsRepository>(
  'ClassStudentsRepository',
  ClassStudentsRepository,
);

container.registerSingleton<IStudentClassCallDetailRepository>(
  'StudentClassCallDetailRepository',
  StudentClassCallDetailRepository,
);

container.registerSingleton<IStudentClassCallDetailsTotalRepository>(
  'StudentClassCallDetailsTotalRepository',
  StudentClassCallDetailsTotalRepository,
);

container.registerSingleton<IHashProvider>('HashProvider', BCryptHashProvider);
