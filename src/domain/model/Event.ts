import {Member} from './Member'

export class Event {

    private member: Member[]

    constructor (private eventName: string, members: string[]) {

        // memberの追加
        members.forEach(mem => this.member.push(new Member(mem)))
    }

    // 精算

}