import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateGAddress1630201877926 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'GADDRESS',
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
            name: 'GUSERS_ID',
            type: 'uuid',
          },
          {
            name: 'STREET',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'NUMBER',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'DISTRICT',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'COMPLEMENT',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'CEP',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'CITY',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'STATE',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'COUNTRY',
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
            name: 'GUSERS',
            columnNames: ['GUSERS_ID'],
            referencedColumnNames: ['ID'],
            referencedTableName: 'GUSERS',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await Promise.all([queryRunner.dropForeignKey('GADDRESS', 'GUSERS')]);
    await queryRunner.dropTable('GADDRESS');
  }
}
