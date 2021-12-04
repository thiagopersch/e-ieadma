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

import ChurchMember from '@modules/achurchmembers/infra/typeorm/entities/ChurchMember';

@Entity('ESTUDENTS')
class Student {
  @PrimaryGeneratedColumn('uuid')
  ID: string;

  @Column()
  ACHURCHMEMBERS_ID: string;

  @ManyToOne(() => ChurchMember)
  @JoinColumn({ name: 'ACHURCHMEMBERS_ID' })
  CHURCHEMEMBER: ChurchMember;

  @DeleteDateColumn()
  DELETED_AT: Date;

  @CreateDateColumn()
  CREATED_AT: Date;

  @UpdateDateColumn()
  UPDATED_AT: Date;
}

export default Student;
