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
import EcclesiasticalField from '@modules/gecclesiasticalfield/infra/typeorm/entities/EcclesiasticalField';

@Entity('ACHURCHMEMBERS')
class ChurchMember {
  @PrimaryGeneratedColumn('uuid')
  ID: string;

  @Column()
  GUSERS_ID: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'GUSERS_ID' })
  GUSER: User;

  @Column()
  GECCLESIASTICALFIELD_ID: string;

  @ManyToOne(() => EcclesiasticalField)
  @JoinColumn({ name: 'GECCLESIASTICALFIELD_ID' })
  GECCLESIASTICALFIELD: EcclesiasticalField;

  @Column()
  DISCIPLINE_IN: boolean;

  @Column()
  INITIAL_PERIOD_DISCIPLINE?: Date;

  @Column()
  FINAL_PERIOD_DISCIPLINE?: Date;

  @Column()
  HOLY_SUPPER: boolean;

  @Column()
  MEMBERSHIP_CARD: boolean;

  @DeleteDateColumn()
  DELETED_AT: Date;

  @CreateDateColumn()
  CREATED_AT: Date;

  @UpdateDateColumn()
  UPDATED_AT: Date;
}

export default ChurchMember;
