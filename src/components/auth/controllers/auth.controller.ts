import { Controller, Get, Param, Body, Post, Put, Delete, HttpException, HttpStatus, Res } from '@nestjs/common';
import { UserModel } from 'src/models/user.model';
import { AuthService } from '../services/auth.service';
import { Response } from 'express';

@Controller('v1/auth')
export class AuthController{

    constructor(
        private _authService: AuthService
    ){}

    @Post()
    login(@Body() model: UserModel, @Res() res: Response){
        try{
            const response = this._authService.doLogin(model);
            if(response['error']){
                throw new Error(response['error']);
            }
            return res.status(HttpStatus.OK).send(response);
        }catch(error){
            throw new HttpException(
                { msg: error.message },
                HttpStatus.BAD_REQUEST
            );
        }
    }
}