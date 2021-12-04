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
import LessonsMagazine from './LessonsMagazine';
import Student from './Student';

@Entity('ECLASSSTUDENTS')
class ClassStudent {
  @PrimaryGeneratedColumn('uuid')
  ID: string;

  @Column()
  ECLASS_ID: string;

  @ManyToOne(() => Class)
  @JoinColumn({ name: 'ECLASS_ID' })
  ECLASS: Class;

  @Column()
  ESTUDENTS_ID: string;

  @ManyToOne(() => Student)
  @JoinColumn({ name: 'ESTUDENTS_ID' })
  ESTUDENTS: Student;

  @Column()
  ELESSONSMAGAZINES_ID: string;

  @ManyToOne(() => LessonsMagazine)
  @JoinColumn({ name: 'ELESSONSMAGAZINES_ID' })
  ELESSONSMAGAZINES: LessonsMagazine;

  @DeleteDateColumn()
  DELETED_AT: Date;

  @CreateDateColumn()
  CREATED_AT: Date;

  @UpdateDateColumn()
  UPDATED_AT: Date;
}

export default ClassStudent;
