import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateUsers1628963356606 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'GUSERS',
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
            name: 'EMAIL',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'PASSWORD',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'CHANGE_PASSWORD',
            type: 'boolean',
            isNullable: false,
            default: true,
          },
          {
            name: 'BAPTIZED_IN_WATER',
            type: 'boolean',
            isNullable: false,
            default: false,
          },
          {
            name: 'BAPTIZED_DATE',
            type: 'timestamp',
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
    await queryRunner.dropTable('GUSERS');
  }
}
