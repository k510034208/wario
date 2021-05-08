import {User} from '../../entity/User'
import {Event} from '../../entity/Event'

class sss {
    to: string
    fromAndAmount: {

    }

}


interface IWarikan {

    member: User[]
    event: Event

    // payor:userid
    // amount:金額（円）
    // return: PaymentID（取消時に利用）
    addPayment (payor: number, amount: number): number

    // 支払を取消すメソッド
    cancelPayment (paymentNumber: number): void

    // すべての支払を取消すメソッド
    resetPayment (): void

    // 割り勘金額を計算するメソッド
    // [支払い相手, [支払う人、金額（円）]]
    calcWarikan (): {
        to: string; fromAndAmount: (string | number)[][]
    }
}

class Warikan implements IWarikan {

    member: User[]
    event: Event

    constructor (member: User[], event: Event) {
        this.member = member
        this.event = event
    }

    addPayment (payor: number, amamount: number) {
        return 0 // 支払いIDをreturn
    }

    // 支払を取消すメソッド
    cancelPayment (paymentNumber: number) {

    }

    // すべての支払を取消すメソッド
    resetPayment () {

    }

    // 割り勘金額を計算するメソッド
    // [支払い相手, [支払う人、金額（円）]]
    calcWarikan () {
        return {
            to: 'nakamura',
            fromAndAmount: [['te', 200]]
        }
    }

}