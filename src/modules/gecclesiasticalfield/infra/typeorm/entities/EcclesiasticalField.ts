import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import BranchType from '@shared/infra/typeorm/enums/Branch';

@Entity('GECCLESIASTICALFIELD')
class EcclesiasticalField {
  @PrimaryGeneratedColumn('uuid')
  ID: string;

  @Column()
  NAME: string;

  @Column({ type: 'enum', enum: ['HEADQUARTER', 'CONGREGATION'] })
  TYPE: BranchType;

  @Column()
  STREET: string;

  @Column()
  NUMBER: string;

  @Column()
  DISTRICT: string;

  @Column()
  COMPLEMENT?: string;

  @Column()
  CEP: string;

  @Column()
  CITY: string;

  @Column()
  STATE: string;

  @Column()
  COUNTRY: string;

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

export default EcclesiasticalField;
