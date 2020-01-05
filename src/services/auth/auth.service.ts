import { Injectable } from "@nestjs/common";
import { Login } from "src/models/auth/login.model";

@Injectable()
export class AuthService{
    doLogin(model: Login): string | boolean{
        if(!model.email || !model.password){
            return 'Email ou senha inválidos.';
        }
        if(model.email != 'a@a.com'){
            return 'Email invalido.';
        }
        if(model.password != '123456'){
            return 'Senha inválida.';
        }

        return true;
    }
}