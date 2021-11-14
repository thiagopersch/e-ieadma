import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinTable,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import AccessUserModule from './AccessUserModule';

@Entity('GAPPMODULES')
class AppModule {
  @PrimaryGeneratedColumn('uuid')
  ID: string;

  @OneToMany(
    () => AccessUserModule,
    accessUsersModule => accessUsersModule.GAPPMODULES,
  )
  @JoinTable()
  ACCESSUSERMODULE: AccessUserModule[];

  @Column()
  NAME: string;

  @Column()
  DESCRIPTION: string;

  @DeleteDateColumn()
  DELETED_AT: Date;

  @CreateDateColumn()
  CREATED_AT: Date;

  @UpdateDateColumn()
  UPDATED_AT: Date;
}

export default AppModule;
