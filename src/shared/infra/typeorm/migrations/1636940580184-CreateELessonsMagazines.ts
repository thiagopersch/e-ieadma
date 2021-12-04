import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateELessonsMagazines1636940580184
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'ELESSONSMAGAZINES',
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
            name: 'EMAGAZINES_ID',
            type: 'uuid',
          },
          {
            name: 'ELESSONS_ID',
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
            name: 'EMAGAZINES',
            columnNames: ['EMAGAZINES_ID'],
            referencedColumnNames: ['ID'],
            referencedTableName: 'EMAGAZINES',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'ELESSONS',
            columnNames: ['ELESSONS_ID'],
            referencedColumnNames: ['ID'],
            referencedTableName: 'ELESSONS',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await Promise.all([
      queryRunner.dropForeignKey('ELESSONSMAGAZINES', 'EMAGAZINES'),
      queryRunner.dropForeignKey('ELESSONSMAGAZINES', 'ELESSONS'),
    ]);

    await queryRunner.dropTable('ELESSONSMAGAZINES');
  }
}
