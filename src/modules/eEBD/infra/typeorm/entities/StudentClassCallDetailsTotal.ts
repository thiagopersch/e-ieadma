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

@Entity('ESTUDENTCLASSCALLDETAILSTOTAL')
class StudentClassCallDetailsTotal {
  @PrimaryGeneratedColumn('uuid')
  ID: string;

  @Column()
  ECLASS_ID: string;

  @ManyToOne(() => Class)
  @JoinColumn({ name: 'ECLASS_ID' })
  ECLASS: Class;

  @Column()
  PRESENCES: number;

  @Column()
  BIBLES: number;

  @Column()
  MAGAZINES: number;

  @Column()
  OFFER: number;

  @Column()
  VISITOR_QUANTITY: number;

  @Column()
  REGISTERED: number;

  @Column()
  PERCENTAGE: number;

  @DeleteDateColumn()
  DELETED_AT: Date;

  @CreateDateColumn()
  CREATED_AT: Date;

  @UpdateDateColumn()
  UPDATED_AT: Date;
}

export default StudentClassCallDetailsTotal;
