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

import Trimestre from './Trimestre';

@Entity('EEBD')
class EBD {
  @PrimaryGeneratedColumn('uuid')
  ID: string;

  @Column()
  ETRIMESTRE_ID: string;

  @ManyToOne(() => Trimestre)
  @JoinColumn({ name: 'ETRIMESTRE_ID' })
  TRIMESTRE: Trimestre;

  @Column()
  DATE: Date;

  @Column('time without time zone')
  START_TIME: Date;

  @Column('time without time zone')
  FINAL_TIME: Date;

  @Column('time without time zone')
  CALL_TIMEOUT: Date;

  @DeleteDateColumn()
  DELETED_AT: Date;

  @CreateDateColumn()
  CREATED_AT: Date;

  @UpdateDateColumn()
  UPDATED_AT: Date;
}

export default EBD;
