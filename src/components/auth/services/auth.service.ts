import { Injectable } from "@nestjs/common";
import { ClientModel } from "src/models/client.model";

@Injectable()
export class AuthService{
    doLogin(model: ClientModel): object{
        
        /*if(!model.email || !model.password){
            return { error: 'Invalid email or password.' };
        }
        if(model.email != 'a@a.com'){
            return { error: 'Invalid email.' };
        }
        if(model.password != '123456'){
            return { error: 'Invalid password.' };
        }*/

        return { success: 'Right email and password.' };;
    }
}