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

import ClassStudent from './ClassStudent';

@Entity('ESTUDENTCLASSCALLDETAILS')
class StudentClassCallDetail {
  @PrimaryGeneratedColumn('uuid')
  ID: string;

  @Column()
  ECLASSSTUDENTS_ID: string;

  @ManyToOne(() => ClassStudent)
  @JoinColumn({ name: 'ECLASSSTUDENTS_ID' })
  ECLASSSTUDENTS: ClassStudent;

  @Column()
  PRESENCE: boolean;

  @Column()
  BIBLE: boolean;

  @Column()
  MAGAZINE: boolean;

  @Column()
  OFFER: number;

  @Column()
  ABSENCE_DATE: Date;

  @DeleteDateColumn()
  DELETED_AT: Date;

  @CreateDateColumn()
  CREATED_AT: Date;

  @UpdateDateColumn()
  UPDATED_AT: Date;
}

export default StudentClassCallDetail;
