import { Injectable, Inject } from "@angular/core";
import { SessionStge } from './sessionStorage.service';
import { HttpClient } from '@angular/common/http';
import { credito } from 'src/models/credito.model';

const url = 'http://localhost:3000/Creditos/';
@Injectable({
    providedIn: 'root'
})

export class creditoService {

    constructor(
        private readonly httpClient: HttpClient
    ) {}

    async getCreditos() {
        return this.httpClient.get(url + SessionStge.getSesion().token);
    }

    async getCredito(Id: number): Promise<any> {
        return this.httpClient.get<credito[]>(url + SessionStge.getSesion().token + "/" + Id);
    }

    async getAbonosAsociados(Id: number) {
        return this.httpClient.get<credito[]>(url + "AbonosAsociados/" + SessionStge.getSesion().token + "/" + Id);;
    }

    async guardarCredito(body: credito) {
        return this.httpClient.post(url + SessionStge.getSesion().token , body);
    }

    async actualizarcredito( body: credito) {
        return this.httpClient.put(url + SessionStge.getSesion().token , body);
    }

    async deleteCredito(Id: number) {
        return this.httpClient.delete(url + SessionStge.getSesion().token + "/" + Id);
    }
}