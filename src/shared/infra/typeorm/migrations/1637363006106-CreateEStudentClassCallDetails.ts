import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateEStudentClassCallDetails1637363006106
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'ESTUDENTCLASSCALLDETAILS',
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
            name: 'ECLASSSTUDENTS_ID',
            type: 'uuid',
          },
          {
            name: 'PRESENCE',
            type: 'boolean',
            default: false,
          },
          {
            name: 'BIBLE',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'MAGAZINE',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'OFFER',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'ABSENCE_DATE',
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
        foreignKeys: [
          {
            name: 'ECLASSSTUDENTS',
            columnNames: ['ECLASSSTUDENTS_ID'],
            referencedColumnNames: ['ID'],
            referencedTableName: 'ECLASSSTUDENTS',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await Promise.all([
      queryRunner.dropForeignKey('ESTUDENTCLASSCALLDETAILS', 'ECLASSSTUDENTS'),
    ]);

    await queryRunner.dropTable('ESTUDENTCLASSCALLDETAILS');
  }
}
