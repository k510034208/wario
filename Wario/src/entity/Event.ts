import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm"
import {User} from "./User"

@Entity()
export class Event {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    eventName: string

    @Column()
    aclId: number

    @OneToMany(type => User, user => user.eventId)
    users: User[]
}
