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

import Lesson from './Lesson';
import Magazine from './Magazine';

@Entity('ELESSONSMAGAZINES')
class LessonsMagazine {
  @PrimaryGeneratedColumn('uuid')
  ID: string;

  @Column()
  EMAGAZINES_ID: string;

  @ManyToOne(() => Magazine)
  @JoinColumn({ name: 'EMAGAZINES_ID' })
  EMAGAZINES: Magazine;

  @Column()
  ELESSONS_ID: string;

  @ManyToOne(() => Lesson)
  @JoinColumn({ name: 'ELESSONS_ID' })
  ELESSONS: Lesson;

  @DeleteDateColumn()
  DELETED_AT: Date;

  @CreateDateColumn()
  CREATED_AT: Date;

  @UpdateDateColumn()
  UPDATED_AT: Date;
}

export default LessonsMagazine;
