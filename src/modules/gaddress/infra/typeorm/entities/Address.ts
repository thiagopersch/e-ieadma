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

@Entity('GADDRESS')
class Address {
  @PrimaryGeneratedColumn('uuid')
  ID: string;

  @Column()
  GUSERS_ID: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'GUSERS_ID' })
  GUSER: User;

  @Column()
  STREET: string;

  @Column()
  NUMBER: string;

  @Column()
  DISTRICT: string;

  @Column()
  COMPLEMENT: string;

  @Column()
  CEP: string;

  @Column()
  CITY: string;

  @Column()
  STATE: string;

  @Column()
  COUNTRY: string;

  @DeleteDateColumn()
  DELETED_AT: Date;

  @CreateDateColumn()
  CREATED_AT: Date;

  @UpdateDateColumn()
  UPDATED_AT: Date;
}

export default Address;
