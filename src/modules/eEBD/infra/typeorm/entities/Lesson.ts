import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('ELESSONS')
class Lesson {
  @PrimaryGeneratedColumn('uuid')
  ID: string;

  @Column()
  LESSON_CODE: string;

  @Column()
  TITLE: string;

  @Column()
  DATE: Date;

  @Column()
  PAGE: number;

  @DeleteDateColumn()
  DELETED_AT: Date;

  @CreateDateColumn()
  CREATED_AT: Date;

  @UpdateDateColumn()
  UPDATED_AT: Date;
}

export default Lesson;
