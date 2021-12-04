import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateEMagazine1636929735302
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'EMAGAZINES',
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
            name: 'ETRIMESTRE_ID',
            type: 'uuid',
          },
          {
            name: 'EMAGAZINESTYPE_ID',
            type: 'uuid',
          },
          {
            name: 'TITLE',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'DESCRIPTION',
            type: 'varchar',
            isNullable: true,
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
            name: 'ETRIMESTRE',
            columnNames: ['ETRIMESTRE_ID'],
            referencedColumnNames: ['ID'],
            referencedTableName: 'ETRIMESTRE',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'EMAGAZINESTYPE',
            columnNames: ['EMAGAZINESTYPE_ID'],
            referencedColumnNames: ['ID'],
            referencedTableName: 'EMAGAZINETYPE',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await Promise.all([
      queryRunner.dropForeignKey('EMAGAZINES', 'ETRIMESTRE'),
      queryRunner.dropForeignKey('EMAGAZINES', 'EMAGAZINESTYPE'),
    ]);

    await queryRunner.dropTable('EMAGAZINES');
  }
}
