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

import Trimestre from '@modules/eEBD/infra/typeorm/entities/Trimestre';
import MagazineType from './MagazineType';

@Entity('EMAGAZINES')
class Magazine {
  @PrimaryGeneratedColumn('uuid')
  ID: string;

  @Column()
  ETRIMESTRE_ID: string;

  @ManyToOne(() => Trimestre)
  @JoinColumn({ name: 'ETRIMESTRE_ID' })
  ETRIMESTRE: Trimestre;

  @Column()
  EMAGAZINESTYPE_ID: string;

  @ManyToOne(() => MagazineType)
  @JoinColumn({ name: 'EMAGAZINESTYPE_ID' })
  EMAGAZINESTYPE: MagazineType;

  @Column()
  TITLE: string;

  @Column()
  DESCRIPTION?: string;

  @DeleteDateColumn()
  DELETED_AT: Date;

  @CreateDateColumn()
  CREATED_AT: Date;

  @UpdateDateColumn()
  UPDATED_AT: Date;
}
export default Magazine;
