import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany} from "typeorm";
import {Event} from "./Event"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userName: string;

    @Column()
    eventId: number

    @ManyToOne(type => Event, event => event.users)
    event: Event
}
