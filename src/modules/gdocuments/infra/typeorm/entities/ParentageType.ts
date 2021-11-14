import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('GPARENTAGETYPE')
class ParentageType {
  @PrimaryGeneratedColumn('uuid')
  ID: string;

  @Column()
  NAME: string;

  @DeleteDateColumn()
  DELETED_AT: Date;

  @CreateDateColumn()
  CREATED_AT: Date;

  @UpdateDateColumn()
  UPDATED_AT: Date;
}

export default ParentageType;
