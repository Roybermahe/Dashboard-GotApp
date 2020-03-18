import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { cliente } from 'src/models/cliente.model';
import { SessionStge } from './sessionStorage.service';

const url = 'http://localhost:3000/Clientes/'

@Injectable({
    providedIn: 'root'
})

export class clienteService {
    constructor(private readonly httpClient : HttpClient) {}

    public async guardarCliente(cliente: cliente) {
        return this.httpClient.post(url +  SessionStge.getSesion().token, cliente);
    }

    public async getClientes() {
        return this.httpClient.get<cliente[]>(url + SessionStge.getSesion().token);
    }
}