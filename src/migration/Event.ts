import { MigrationInterface, QueryRunner, Table, TableIndex, TableColumn } from "typeorm"

export class Event implements MigrationInterface{
  async up(queryRunner: QueryRunner):Promise<void> {
    await queryRunner.createTable(new Table({
      name: "event",
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