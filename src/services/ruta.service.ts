import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { ruta } from 'src/models/ruta.model';
import { SessionStge } from './sessionStorage.service';

const url = 'http://localhost:3000/rutas/';

@Injectable({
    providedIn: 'root'
})

export class rutaService {
    constructor (
        private readonly httpClient: HttpClient
    ) {}

    public async guardarRuta(ruta: ruta) {
       return this.httpClient.post(url + SessionStge.getSesion().token, ruta);
    }

    public async getRutas() {
       return this.httpClient.get<ruta[]>(url + SessionStge.getSesion().token);
    }
}