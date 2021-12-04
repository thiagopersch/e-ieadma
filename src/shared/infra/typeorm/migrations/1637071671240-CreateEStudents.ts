import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateEStudents1637071671240
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'ESTUDENTS',
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
            name: 'ACHURCHMEMBERS_ID',
            type: 'uuid',
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
            name: 'ACHURCHMEMBERS',
            columnNames: ['ACHURCHMEMBERS_ID'],
            referencedColumnNames: ['ID'],
            referencedTableName: 'ACHURCHMEMBERS',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await Promise.all([
      queryRunner.dropForeignKey('ESTUDENTS', 'ACHURCHMEMBERS'),
    ]);

    await queryRunner.dropTable('ESTUDENTS');
  }
}
