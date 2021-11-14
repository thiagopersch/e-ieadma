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
            name: 'LOCATION',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'TYPE',
            type: 'enum',
            enum: ['HEADQUARTER', 'CONGREGATION'],
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
