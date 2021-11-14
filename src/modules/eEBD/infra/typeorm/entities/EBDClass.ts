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

import Class from './Class';
import EBD from './EBD';

@Entity('EEBDCLASS')
class EBDClass {
  @PrimaryGeneratedColumn('uuid')
  ID: string;

  @Column()
  ECLASS_ID: string;

  @ManyToOne(() => Class)
  @JoinColumn({ name: 'ECLASS_ID' })
  ECLASS: Class;

  @Column()
  EEBD_ID: string;

  @ManyToOne(() => EBD)
  @JoinColumn({ name: 'EEBD_ID' })
  EEBD: EBD;

  @DeleteDateColumn()
  DELETED_AT: Date;

  @CreateDateColumn()
  CREATED_AT: Date;

  @UpdateDateColumn()
  UPDATED_AT: Date;
}

export default EBDClass;
