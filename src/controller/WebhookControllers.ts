import {getRepository, getManager} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Event} from "../entity/Event";
import {User} from "../entity/User"
import {HttpError, JsonController, Get, Param, NotFoundError, InternalServerError, Post, BodyParam, Body, Header} from 'routing-controllers'
import {OperationCanceledException} from "typescript";
import {IsNotEmpty, isNotEmpty, IsString, isString, MaxLength} from "class-validator";

@JsonController() // リクエストとレスポンスがjson形式であることを保証する
export class WebhookController {

    // 疎通確認用ルーティング
    @Get('/webhook/')
    async getConnection () {

        return {
            status: 'success',
            message: 'Connected successfully!!'
        }
    }

    // メッセージ取得用ルーティング
    @Post('/webhook/')
    @Header('Authorization', 'Bearer xuY+Bdfl62TcU0Bvtoi/FMMrQaZLzIjIFDPs4K0WXeK/fcnpTvYTr59No0MRxaI3WQWMrRtRtx5SUScEMP6l6/XQQjUGV6SnsXJ6/6OgJq9PPaGfnZS7uTTKN6Yi0eU3Cr6BIHI4EdDi/IYgvw1pEgdB04t89/1O/w1cDnyilFU=')
    async postMessage (
        @Body() body: any
    ) {

        let replyToken = body.event.replyToken

        return {
            replyToken: replyToken,
            messages: [{
                type: 'text',
                text: 'hello!!'
            }]
        }
    }



}


