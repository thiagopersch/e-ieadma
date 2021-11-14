import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateEEBD1636899977813 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'EEBD',
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
            name: 'ETRIMESTRE_ID',
            type: 'uuid',
          },
          {
            name: 'DATE',
            type: 'timestamp',
            isNullable: false,
          },
          {
            name: 'START_TIME',
            type: 'time without time zone',
            isNullable: false,
          },
          {
            name: 'FINAL_TIME',
            type: 'time without time zone',
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
            name: 'ETRIMESTRE',
            columnNames: ['ETRIMESTRE_ID'],
            referencedColumnNames: ['ID'],
            referencedTableName: 'ETRIMESTRE',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await Promise.all([queryRunner.dropForeignKey('EEBD', 'ETRIMESTRE')]);

    await queryRunner.dropTable('EEBD');
  }
}
