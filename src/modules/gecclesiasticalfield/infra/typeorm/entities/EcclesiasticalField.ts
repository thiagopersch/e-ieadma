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

  @Column()
  LOCATION: string;

  @Column({ type: 'enum', enum: ['HEADQUARTER', 'CONGREGATION'] })
  TYPE: BranchType;

  @DeleteDateColumn()
  DELETED_AT: Date;

  @CreateDateColumn()
  CREATED_AT: Date;

  @UpdateDateColumn()
  UPDATED_AT: Date;
}

export default EcclesiasticalField;
