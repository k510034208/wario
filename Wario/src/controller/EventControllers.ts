import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Event} from "../entity/Event";
import {JsonController, Get, Param, NotFoundError, InternalServerError} from 'routing-controllers'

const eventRepository = getRepository(Event)

@JsonController() // リクエストとレスポンスがjson形式であることを保証する
export class EventController {
    /*

    // イベント情報取得のAPI
    @Get('/api/event/:id')
        
    // @Content-type('xxxx') => 任意でコンテントタイプを設定可能
    // @Redirect('https://xxxxx') => リダイレクトを設定可能
    // @HttpCode(xxx) => 任意のHTTPコードを設定可能
    // @Header('xxxx':'xxx') => 任意のHTTPヘッダを設定可能
    async getEventInformation (@Param('id') id: number) {
        // @Param(paramerter) paramerter: format => URLパラメータのvalidation
        // @BodyParam(paramerter) paramerter: format => POSTパラメータのvalidation
        // @HeaderParam(paramerter) paramerter: format => ヘッダーパラメータのvalidation
        // @CoolieParam(paramerter) paramerter: format => Coolieパラメータのvalidation
        // @SessionParam(paramerter) paramerter: format => Sessionパラメータのvalidation

        // @BodyParam(required: true) paramerter: format => POSTパラメータの必須チェック

        // 認証

        // イベント情報取得
        try {

            let event = await eventRepository.findOne(id, {
                relations: ["users"]
            })

            // レスポンス
            return {
                status: 'success',
                result: {
                    eventid: event.id,
                    eventName: event.eventName,
                    member: event.users
                }
            }

        } catch (err) {
            console.error(err)
            throw new InternalServerError('Sever Error')
        }
    }
    */
}