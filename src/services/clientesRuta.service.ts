import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { SessionStge } from './sessionStorage.service';
import { cliente_en_ruta } from 'src/models/clienteRuta.model';

const url = 'http://localhost:3000/ClientesEnRuta/';

@Injectable({
    providedIn: 'root'
})

export class clientesRutaService {  

    constructor(
        private readonly httpClient: HttpClient
    ) {}

    async getClienteRutas() {
        return this.httpClient.get<cliente_en_ruta>(url + SessionStge.getSesion().token);
    }

    async postClienteRutas(clienteRuta: cliente_en_ruta) {
        return this.httpClient.post(url + SessionStge.getSesion().token, clienteRuta);
    }
}