import {Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn} from "typeorm"
import {User} from "./User"

@Entity()
export class Event {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    eventName: string

    @Column()
    aclId: number

    @OneToMany(type => User, user => user.event)
    users: User[]

    constructor (eventName: string, aclId: number) {
        this.eventName = eventName
        this.aclId = aclId
    }
}
