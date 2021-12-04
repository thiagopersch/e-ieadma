import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateEMagazineType1636927863892
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'EMAGAZINETYPE',
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
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('EMAGAZINETYPE');
  }
}