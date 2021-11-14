import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('ZMODULES')
class Module {
  @PrimaryGeneratedColumn('uuid')
  ID: string;

  @Column()
  SIGLA: string;

  @Column()
  NAME: string;

  @Column()
  DESCRIPTION: string;

  @DeleteDateColumn()
  DELETED_AT: Date;

  @CreateDateColumn()
  CREATED_AT: Date;

  @UpdateDateColumn()
  UPDATED_AT: Date;
}

export default Module;
