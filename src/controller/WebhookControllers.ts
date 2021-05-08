import {getRepository, getManager} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Event} from "../entity/Event";
import {User} from "../entity/User"
import {HttpError, JsonController, Get, Param, NotFoundError, InternalServerError, Post, BodyParam, Body} from 'routing-controllers'
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
    @Post('/webhock/')
    async postMessage (
        @Body() body
    ) {

        console.log(body)

        return {
            status: 'success',
            message: 'test ok'
        }
    }



}


