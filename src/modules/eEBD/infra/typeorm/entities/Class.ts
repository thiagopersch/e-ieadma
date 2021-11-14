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

import ClassType from './ClassType';

@Entity('ECLASS')
class Class {
  @PrimaryGeneratedColumn('uuid')
  ID: string;

  @Column()
  ECLASSTYPE_ID: string;

  @ManyToOne(() => ClassType)
  @JoinColumn({ name: 'ECLASSTYPE_ID' })
  ECLASSTYPE: ClassType;

  @Column()
  NAME: string;

  @Column()
  DESCRIPTION?: string;

  @DeleteDateColumn()
  DELETED_AT: Date;

  @CreateDateColumn()
  CREATED_AT: Date;

  @UpdateDateColumn()
  UPDATED_AT: Date;
}

export default Class;
