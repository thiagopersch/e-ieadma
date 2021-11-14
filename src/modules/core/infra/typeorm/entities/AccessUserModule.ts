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

import AccessLevel from './AccessLevel';
import AppModule from './AppModule';

@Entity('GACCESSUSERSMODULES')
class AccessUserModule {
  @PrimaryGeneratedColumn('uuid')
  ID: string;

  @Column()
  GACCESSLEVELS_ID: string;

  @ManyToOne(() => AccessLevel)
  @JoinColumn({ name: 'GACCESSLEVELS_ID' })
  GACCESSLEVELS: AccessLevel;

  @Column()
  GAPPMODULES_ID: string;

  @ManyToOne(() => AppModule)
  @JoinColumn({ name: 'GAPPMODULES_ID' })
  GAPPMODULES: AppModule;

  @Column()
  READ: boolean;

  @Column()
  WRITE: boolean;

  @DeleteDateColumn()
  DELETED_AT: Date;

  @CreateDateColumn()
  CREATED_AT: Date;

  @UpdateDateColumn()
  UPDATED_AT: Date;
}

export default AccessUserModule;
