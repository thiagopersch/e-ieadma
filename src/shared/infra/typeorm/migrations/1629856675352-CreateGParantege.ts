import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateGParantage1629856675352
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'GPARENTAGE',
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
            name: 'GPARENTAGETYPE_ID',
            type: 'uuid',
          },
          {
            name: 'NAME',
            type: 'varchar',
            isNullable: false,
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
            name: 'PARENTAGETYPE',
            columnNames: ['GPARENTAGETYPE_ID'],
            referencedColumnNames: ['ID'],
            referencedTableName: 'GPARENTAGETYPE',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await Promise.all([
      queryRunner.dropForeignKey('GPARENTAGE', 'PARENTAGETYPE'),
    ]);
    await queryRunner.dropTable('GPARENTAGE');
  }
}
