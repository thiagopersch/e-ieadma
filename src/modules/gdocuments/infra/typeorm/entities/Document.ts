import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import User from '@modules/gusers/infra/typeorm/entities/User';

import Nationality from '@shared/infra/typeorm/enums/Nationality';
import CivilStatus from './CivilStatus';
import Parentage from './Parentage';
import ColorRace from './ColorRace';

@Entity('GDOCUMENTS')
class Document {
  @PrimaryGeneratedColumn('uuid')
  ID: string;

  @Column()
  GUSERS_ID: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'GUSERS_ID' })
  GUSER: User;

  @Column()
  GENERAL_RECORD: string;

  @Column()
  SHIPPING_DATE?: Date;

  @Column()
  BIRTH_DATE?: Date;

  @Column()
  CPF: string;

  @Column()
  GCIVILSTATUS_ID: string;

  @ManyToOne(() => CivilStatus)
  @JoinColumn({ name: 'GCIVILSTATUS_ID' })
  CIVILSTATUS: CivilStatus;

  @Column()
  GPARENTAGE_ID: string;

  @ManyToOne(() => Parentage)
  @JoinColumn({ name: 'GPARENTAGE_ID' })
  PARENTAGE: Parentage;

  @Column()
  SEX: string;

  @Column()
  FORMATION?: string;

  @Column()
  GCOLORRACE_ID: string;

  @ManyToOne(() => ColorRace)
  @JoinColumn({ name: 'GCOLORRACE_ID' })
  COLORRACE: ColorRace;

  @Column()
  NATURALNESS: string;

  @Column({ type: 'enum', enum: ['BRASILEIRA', 'ESTRANGEIRA'] })
  NATIONALITY: Nationality;

  @Column()
  SOURCE_DOCUMENT?: string;

  @Column()
  VOTER_REGISTRATION_NUMBER?: string;

  @Column()
  ZONE?: string;

  @Column()
  SESSION?: string;

  @Column()
  CITY?: string;

  @Column()
  UF?: string;

  @Column()
  ISSUANCE_DATE?: Date;

  @Column()
  PHONE: string;

  @Column()
  PHONE_TWO?: string;

  @Column()
  PHONE_THREE?: string;

  @DeleteDateColumn()
  DELETED_AT: Date;

  @CreateDateColumn()
  CREATED_AT: Date;

  @UpdateDateColumn()
  UPDATED_AT: Date;
}

export default Document;
