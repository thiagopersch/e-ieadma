import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateAChurchMembers1634175891507
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'ACHURCHMEMBERS',
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
            name: 'GECCLESIASTICALFIELD_ID',
            type: 'uuid',
          },
          {
            name: 'DISCIPLINE_IN',
            type: 'boolean',
            isNullable: false,
            default: false,
          },
          {
            name: 'INITIAL_PERIOD_DISCIPLINE',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'FINAL_PERIOD_DISCIPLINE',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'HOLY_SUPPER',
            type: 'boolean',
            isNullable: false,
            default: false,
          },
          {
            name: 'MEMBERSHIP_CARD',
            type: 'boolean',
            isNullable: false,
            default: false,
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
          {
            name: 'GECCLESIASTICALFIELD',
            columnNames: ['GECCLESIASTICALFIELD_ID'],
            referencedColumnNames: ['ID'],
            referencedTableName: 'GECCLESIASTICALFIELD',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await Promise.all([
      queryRunner.dropForeignKey('ACHURCHMEMBERS', 'GUSERS'),
      queryRunner.dropForeignKey('ACHURCHMEMBERS', 'GECCLESIASTICALFIELD'),
    ]);

    await queryRunner.dropTable('ACHURCHMEMBERS');
  }
}
