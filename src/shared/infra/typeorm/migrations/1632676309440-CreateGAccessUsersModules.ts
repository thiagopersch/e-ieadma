import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateGAccessUsersModules1632676309440
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'GACCESSUSERSMODULES',
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
            name: 'GACCESSLEVELS_ID',
            type: 'uuid',
          },
          {
            name: 'GAPPMODULES_ID',
            type: 'uuid',
          },
          {
            name: 'READ',
            type: 'boolean',
            default: false,
          },
          {
            name: 'WRITE',
            type: 'boolean',
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
            name: 'GACCESSLEVELSID',
            columnNames: ['GACCESSLEVELS_ID'],
            referencedColumnNames: ['ID'],
            referencedTableName: 'GACCESSLEVELS',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'GAPPMODULESID',
            columnNames: ['GAPPMODULES_ID'],
            referencedColumnNames: ['ID'],
            referencedTableName: 'GAPPMODULES',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await Promise.all([
      queryRunner.dropForeignKey('GACCESSUSERSMODULES', 'GACCESSLEVELSID'),
      queryRunner.dropForeignKey('GACCESSUSERSMODULES', 'GAPPMODULESID'),
    ]);

    await queryRunner.dropTable('GACCESSUSERSMODULES');
  }
}
