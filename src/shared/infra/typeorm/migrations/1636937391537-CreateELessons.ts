import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateELessons1636937391537 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'ELESSONS',
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
            name: 'LESSON_CODE',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'TITLE',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'DATE',
            type: 'timestamp',
            isNullable: false,
          },
          {
            name: 'PAGE',
            type: 'integer',
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
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('ELESSONS');
  }
}
