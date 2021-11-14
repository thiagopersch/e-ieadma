import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateEEBDClass1636916382850
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'EEBDCLASS',
        columns: [
          {
            name: 'ID',
            type: 'uuid',
            isPrimary: true,
            isNullable: false,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'ECLASS_ID',
            type: 'uuid',
          },
          {
            name: 'EEBD_ID',
            type: 'uuid',
          },
          {
            name: 'DELETED_AT',
            type: 'timestamptz',
            isNullable: true,
          },
          {
            name: 'CREATED_AT',
            type: 'timestamptz',
            default: 'now()',
          },
          {
            name: 'UPDATED_AT',
            type: 'timestamptz',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'ECLASS',
            columnNames: ['ECLASS_ID'],
            referencedColumnNames: ['ID'],
            referencedTableName: 'ECLASS',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'EEBD',
            columnNames: ['EEBD_ID'],
            referencedColumnNames: ['ID'],
            referencedTableName: 'EEBD',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await Promise.all([
      queryRunner.dropForeignKey('EEBDCLASS', 'ECLASS'),
      queryRunner.dropForeignKey('EEBDCLASS', 'EEBD'),
    ]);

    await queryRunner.dropTable('EEBDCLASS');
  }
}
