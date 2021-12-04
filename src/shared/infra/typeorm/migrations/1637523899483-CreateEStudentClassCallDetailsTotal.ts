import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateEStudentClassCallDetailsTotal1637523899483
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'ESTUDENTCLASSCALLDETAILSTOTAL',
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
            name: 'ECLASS_ID',
            type: 'uuid',
          },
          {
            name: 'PRESENCES',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'BIBLES',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'MAGAZINES',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'OFFER',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'VISITOR_QUANTITY',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'REGISTERED',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'PERCENTAGE',
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
      queryRunner.dropForeignKey('ESTUDENTCLASSCALLDETAILSTOTAL', 'ECLASS'),
    ]);

    await queryRunner.dropTable('ESTUDENTCLASSCALLDETAILSTOTAL');
  }
}
