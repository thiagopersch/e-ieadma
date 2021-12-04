import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateEcclesiasticalField1630246108731
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'GECCLESIASTICALFIELD',
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
            name: 'NAME',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'TYPE',
            type: 'enum',
            enum: ['HEADQUARTER', 'CONGREGATION'],
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
            name: 'PHONE',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'PHONE_TWO',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'PHONE_THREE',
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
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('GECCLESIASTICALFIELD');
  }
}
