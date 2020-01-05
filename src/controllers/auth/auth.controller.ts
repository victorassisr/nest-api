import { Controller, Get, Param, Body, Post, Put, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { Login } from 'src/models/auth/login.model';
import { AuthService } from 'src/services/auth/auth.service';

@Controller('v1/auth')
export class AuthController{

    constructor(
        private authService: AuthService
    ){}

    @Post()
    login(@Body() model: Login){
        try{
            const isOk = this.authService.doLogin(model);
            if(isOk !== true){
                throw new Error(isOk.toString());
            }
            return model;
        }catch(erro){
            throw new HttpException({msg: erro.message},HttpStatus.BAD_REQUEST);
        }
    }
}