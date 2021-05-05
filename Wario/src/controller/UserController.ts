import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Event} from "../entity/Event";
import {Controller, Get, Param} from 'routing-controllers'

@Controller()
export class UserController {
    @Get('/api/user/:id')
    getOne (@Param('id') id: number) {
        return 'this method return specific user.'
    }
}