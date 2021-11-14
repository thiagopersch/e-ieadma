import { Exclude } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('GUSERS')
class User {
  @PrimaryGeneratedColumn('uuid')
  ID: string;

  @Column()
  NAME: string;

  @Column()
  EMAIL: string;

  @Exclude()
  @Column()
  PASSWORD: string;

  @Column()
  CHANGE_PASSWORD: boolean;

  @Column()
  BAPTIZED_IN_WATER: boolean;

  @Column()
  BAPTIZED_DATE?: Date;

  @DeleteDateColumn()
  DELETED_AT: Date;

  @CreateDateColumn()
  CREATED_AT: Date;

  @UpdateDateColumn()
  UPDATED_AT: Date;
}

export default User;
