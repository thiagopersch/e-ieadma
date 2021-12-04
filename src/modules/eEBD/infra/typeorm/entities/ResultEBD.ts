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
import EBD from './EBD';
import Class from './Class';

@Entity('ERESULTEBD')
class ResultEBD {
  @PrimaryGeneratedColumn('uuid')
  ID: string;

  @Column()
  GUSERS_ID: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'GUSERS_ID' })
  GUSERS: User;

  @Column()
  EEBD_ID: string;

  @ManyToOne(() => EBD)
  @JoinColumn({ name: 'EEBD_ID' })
  EEBD: EBD;

  @Column()
  ECLASS_ID: string;

  @ManyToOne(() => Class)
  @JoinColumn({ name: 'ECLASS_ID' })
  ECLASS: Class;

  @Column()
  DATE: Date;

  @Column()
  PRESENCE_TOTAL: number;

  @Column()
  BIBLES_TOTAL: number;

  @Column()
  MAGAZINES_TOTAL: number;

  @Column()
  OFFER_TOTAL: number;

  @Column()
  VISITOR_QUANTITY_TOTAL: number;

  @Column()
  REGISTERED_TOTAL: number;

  @Column()
  PERCENTAGE_TOTAL: number;

  @DeleteDateColumn()
  DELETED_AT: Date;

  @CreateDateColumn()
  CREATED_AT: Date;

  @UpdateDateColumn()
  UPDATED_AT: Date;
}

export default ResultEBD;
