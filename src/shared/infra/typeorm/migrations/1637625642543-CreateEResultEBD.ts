import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateEResultEBD1637625642543
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'ERESULTEBD',
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
            name: 'EEBD_ID',
            type: 'uuid',
          },
          {
            name: 'ECLASS_ID',
            type: 'uuid',
          },
          {
            name: 'DATE',
            type: 'timestamp',
            isNullable: false,
          },
          {
            name: 'PRESENCE_TOTAL',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'BIBLES_TOTAL',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'MAGAZINES_TOTAL',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'OFFER_TOTAL',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'VISITOR_QUANTITY_TOTAL',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'REGISTERED_TOTAL',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'PERCENTAGE_TOTAL',
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
            name: 'EEBD',
            columnNames: ['EEBD_ID'],
            referencedColumnNames: ['ID'],
            referencedTableName: 'EEBD',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'ECLASS',
            columnNames: ['ECLASS_ID'],
            referencedColumnNames: ['ID'],
            referencedTableName: 'ECLASS',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await Promise.all([
      queryRunner.dropForeignKey('ERESULTEBD', 'GUSERS'),
      queryRunner.dropForeignKey('ERESULTEBD', 'EEBD'),
      queryRunner.dropForeignKey('ERESULTEBD', 'ECLASS'),
    ]);

    await queryRunner.dropTable('ERESULTEBD');
  }
}
