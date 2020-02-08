import { Injectable } from "@angular/core";
import { sessionModel } from 'src/models/session.model';

@Injectable({
    providedIn: 'root'
})

export class SessionStge {

    public static setSesion(data: sessionModel) {
        sessionStorage.setItem('usuario',JSON.stringify(data));
    }

    public static getSesion(): sessionModel {
        let user = sessionStorage.getItem('usuario');
        console.log(user);
        return user == null ? null : <sessionModel>JSON.parse(user);
    }
}