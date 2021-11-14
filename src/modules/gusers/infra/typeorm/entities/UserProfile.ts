import {
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import EcclesiasticalField from '@modules/gecclesiasticalfield/infra/typeorm/entities/EcclesiasticalField';
import AccessLevel from '@modules/core/infra/typeorm/entities/AccessLevel';

import User from './User';

@Entity('GUSERPROFILES')
class UserProfile {
  @PrimaryGeneratedColumn('uuid')
  ID: string;

  @Column()
  NAME: string;

  @Column()
  GUSERS_ID: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'GUSERS_ID' })
  GUSERS: User;

  @Column()
  GECCLESIASTICALFIELD_ID: string;

  @ManyToOne(() => EcclesiasticalField)
  @JoinColumn({ name: 'GECCLESIASTICALFIELD_ID' })
  GECCLESIASTICALFIELD: EcclesiasticalField;

  @Column()
  GACCESSLEVELS_ID: string;

  @ManyToOne(() => AccessLevel)
  @JoinColumn({ name: 'GACCESSLEVELS_ID' })
  GACCESSLEVELS: AccessLevel;

  @Column()
  DEFAULTPROFILE: boolean;

  @DeleteDateColumn()
  DELETED_AT: Date;

  @CreateDateColumn()
  CREATED_AT: Date;

  @UpdateDateColumn()
  UPDATED_AT: Date;
}

export default UserProfile;
