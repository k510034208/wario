import { MigrationInterface, QueryRunner, Table, TableIndex, TableColumn } from "typeorm"

export class User implements MigrationInterface{

  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: "user",
      columns: [{
        name: "id",
        type: "int",
        isPrimary: true
      }, {
        name: "eventName",
        type: "varchar",
      }]
    }),true)
  }

  async down(queryRunner: QueryRunner):Promise<void> {
    
  }
}