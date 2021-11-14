import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateUserProfiles1633660289672
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'GUSERPROFILES',
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
            name: 'NAME',
            type: 'varchar',
            isNullable: false,
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
            name: 'GACCESSLEVELS_ID',
            type: 'uuid',
          },
          {
            name: 'DEFAULTPROFILE',
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
          {
            name: 'GACCESSLEVELS',
            columnNames: ['GACCESSLEVELS_ID'],
            referencedColumnNames: ['ID'],
            referencedTableName: 'GACCESSLEVELS',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await Promise.all([
      queryRunner.dropForeignKey('GUSERPROFILES', 'GUSERS'),
      queryRunner.dropForeignKey('GUSERPROFILES', 'GECCLESIASTICALFIELD'),
      queryRunner.dropForeignKey('GUSERPROFILES', 'GACCESSLEVELS'),
    ]);

    await queryRunner.dropTable('GUSERPROFILES');
  }
}
