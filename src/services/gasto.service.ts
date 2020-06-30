import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { host } from './host.service';
import { gasto } from 'src/models/gasto.model';
import { SessionStge } from './sessionStorage.service';
import { tipo_gasto } from 'src/models/tipoGasto.model';

const url = host + "/Gasto/";
const urlTipoGasto = host + "/tipoGasto/"; 
@Injectable({providedIn: 'root'})
export class GastoService {
    constructor(private httpClient: HttpClient) { }
    
    public async getGastos() {
        return this.httpClient.get<gasto[]>(url + SessionStge.getSesion().token);
    }

    public async getTipoGastos() {
        return this.httpClient.get<tipo_gasto[]>(urlTipoGasto + SessionStge.getSesion().token);
    } 
}