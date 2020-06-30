import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { host } from './host.service';
import { cobrador } from 'src/models/cobrador.model';
import { SessionStge } from './sessionStorage.service';

const url = host + "/Cobradores/"; 
@Injectable({providedIn: 'root'})
export class CobradoresService {
    constructor(private httpClient: HttpClient) { }
    
    public async getCobradores() {
        return this.httpClient.get<cobrador[]>(url + SessionStge.getSesion().token);
    }
    
}