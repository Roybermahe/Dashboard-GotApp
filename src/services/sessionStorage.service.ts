import { Injectable } from "@angular/core";
import { sessionModel } from 'src/models/session.model';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { host } from './host.service';

const UrlHost = host + '/InicioSesion';

@Injectable({
    providedIn: 'root'
})

export class SessionStge {
    constructor(private readonly httpClient: HttpClient, private routes: Router) {}

    public static setSesion(data: sessionModel) {
        sessionStorage.setItem('usuario',JSON.stringify(data));
    }

    public static getSesion(): sessionModel {
        let user = sessionStorage.getItem('usuario');
        return user == null ? null : <sessionModel>JSON.parse(user);
    }

    public static async cerrarSesion() {
        sessionStorage.removeItem('usuario');
    }

    public async pedirToken(data: sessionModel) {
       return await this.httpClient.post(UrlHost, data);
    }
}