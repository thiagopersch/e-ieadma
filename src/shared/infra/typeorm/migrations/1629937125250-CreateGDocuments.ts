import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateGDocuments1629937125250
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'GDOCUMENTS',
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
            name: 'GENERAL_RECORD',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'SHIPPING_DATE',
            type: 'timestamp',
            isNullable: false,
          },
          {
            name: 'BIRTH_DATE',
            type: 'timestamp',
            isNullable: false,
          },
          {
            name: 'CPF',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'GCIVILSTATUS_ID',
            type: 'uuid',
          },
          {
            name: 'GPARENTAGE_ID',
            type: 'uuid',
          },
          {
            name: 'SEX',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'FORMATION',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'GCOLORRACE_ID',
            type: 'uuid',
          },
          {
            name: 'NATURALNESS',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'NATIONALITY',
            type: 'enum',
            enum: ['BRASILEIRA', 'ESTRANGEIRA'],
          },
          {
            name: 'SOURCE_DOCUMENT',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'VOTER_REGISTRATION_NUMBER',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'ZONE',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'SESSION',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'CITY',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'UF',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'ISSUANCE_DATE',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'PHONE',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'PHONE_TWO',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'PHONE_THREE',
            type: 'varchar',
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
            name: 'GUSERS',
            columnNames: ['GUSERS_ID'],
            referencedColumnNames: ['ID'],
            referencedTableName: 'GUSERS',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'GCIVILSTATUS',
            columnNames: ['GCIVILSTATUS_ID'],
            referencedColumnNames: ['ID'],
            referencedTableName: 'GCIVILSTATUS',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'GPARENTAGE',
            columnNames: ['GPARENTAGE_ID'],
            referencedColumnNames: ['ID'],
            referencedTableName: 'GPARENTAGE',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'GCOLORRACE',
            columnNames: ['GCOLORRACE_ID'],
            referencedColumnNames: ['ID'],
            referencedTableName: 'GCOLORRACE',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await Promise.all([
      queryRunner.dropForeignKey('GDOCUMENTS', 'GUSERS'),
      queryRunner.dropForeignKey('GDOCUMENTS', 'GCIVILSTATUS'),
      queryRunner.dropForeignKey('GDOCUMENTS', 'GPARENTAGE'),
      queryRunner.dropForeignKey('GDOCUMENTS', 'GCOLORRACE'),
    ]);

    await queryRunner.dropTable('GDOCUMENTS');
  }
}
