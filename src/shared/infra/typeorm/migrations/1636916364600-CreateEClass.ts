import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateEClass1636916364600 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'ECLASS',
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
            name: 'ECLASSTYPE_ID',
            type: 'uuid',
          },
          {
            name: 'NAME',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'DESCRIPTION',
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
            name: 'ECLASSTYPE',
            columnNames: ['ECLASSTYPE_ID'],
            referencedColumnNames: ['ID'],
            referencedTableName: 'ECLASSTYPE',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await Promise.all([queryRunner.dropForeignKey('ECLASS', 'ECLASSTYPE')]);

    await queryRunner.dropTable('ECLASSTYPE');
  }
}
