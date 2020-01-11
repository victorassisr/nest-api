import { Injectable } from "@nestjs/common";
import { UserModel } from 'src/models/user.model';

@Injectable()
export class AuthService{
    doLogin(model: UserModel): object{
        
        if(!model.email || !model.password){
            return { error: 'Invalid email or password.' };
        }
        if(model.email != 'a@a.com'){
            return { error: 'Invalid email.' };
        }
        if(model.password != '123456'){
            return { error: 'Invalid password.' };
        }

        return { success:  model };
    }
}