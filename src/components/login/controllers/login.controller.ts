import { Controller, Get, Param, Body, Post, Put, Delete, HttpException, HttpStatus, Res } from '@nestjs/common';
import { Login } from '../models/login.model';
import { LoginService } from '../services/login.service';
import { Response } from 'express';

@Controller('v1/login')
export class LoginController{

    constructor(
        private loginService: LoginService
    ){}

    @Post()
    login(@Body() model: Login, @Res() res: Response){
        try{
            const response = this.loginService.doLogin(model);
            if(response['error']){
                throw new Error(response['error']);
            }
            return res.status(HttpStatus.OK).send(response);
        }catch(erro){
            throw new HttpException({msg: erro.message},HttpStatus.BAD_REQUEST);
        }
    }
}