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

import ParentageType from './ParentageType';

@Entity('GPARENTAGE')
class Parentage {
  @PrimaryGeneratedColumn('uuid')
  ID: string;

  @Column()
  NAME: string;

  @Column()
  GPARENTAGETYPE_ID: string;

  @ManyToOne(() => ParentageType)
  @JoinColumn({ name: 'GPARENTAGETYPE_ID' })
  PARENTAGETYPE: ParentageType;

  @DeleteDateColumn()
  DELETED_AT: Date;

  @CreateDateColumn()
  CREATED_AT: Date;

  @UpdateDateColumn()
  UPDATED_AT: Date;
}

export default Parentage;
