import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateEClassStudents1637284211556
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'ECLASSSTUDENTS',
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
            name: 'ESTUDENTS_ID',
            type: 'uuid',
          },
          {
            name: 'ELESSONSMAGAZINES_ID',
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
            name: 'ECLASS',
            columnNames: ['ECLASS_ID'],
            referencedColumnNames: ['ID'],
            referencedTableName: 'ECLASS',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'ESTUDENTS',
            columnNames: ['ESTUDENTS_ID'],
            referencedColumnNames: ['ID'],
            referencedTableName: 'ESTUDENTS',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'ELESSONSMAGAZINES',
            columnNames: ['ELESSONSMAGAZINES_ID'],
            referencedColumnNames: ['ID'],
            referencedTableName: 'ELESSONSMAGAZINES',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await Promise.all([
      queryRunner.dropForeignKey('ECLASSSTUDENTS', 'ECLASS'),
      queryRunner.dropForeignKey('ECLASSSTUDENTS', 'ESTUDENTS'),
      queryRunner.dropForeignKey('ECLASSSTUDENTS', 'ELESSONSMAGAZINES'),
    ]);

    await queryRunner.dropTable('ECLASSSTUDENTS');
  }
}
