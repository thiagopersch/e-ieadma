import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import BranchType from '@shared/infra/typeorm/enums/Branch';

@Entity('GACCESSLEVELS')
class AccessLevel {
  @PrimaryGeneratedColumn('uuid')
  ID: string;

  @Column()
  NAME: string;

  @Column()
  CODE: string;

  @Column({ type: 'enum', enum: ['HEADQUARTER', 'CONGREGATION'] })
  ONLYON: BranchType;

  @DeleteDateColumn()
  DELETED_AT: Date;

  @CreateDateColumn()
  CREATED_AT: Date;

  @UpdateDateColumn()
  UPDATED_AT: Date;
}

export default AccessLevel;
