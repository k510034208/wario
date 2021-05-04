import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Acl {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    eventId: number

    @Column()
    userId: number
}
