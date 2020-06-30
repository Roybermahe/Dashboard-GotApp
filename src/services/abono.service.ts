import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { abono } from 'src/models/abono.model';
import { SessionStge } from './sessionStorage.service';
import { host } from './host.service';

const url = host + "/Abonos/";

@Injectable({providedIn: 'root'})
export class AbonoService {
    constructor(private httpClient: HttpClient) { }
    
    public async getAbonos() {
        return this.httpClient.get<abono[]>(url + SessionStge.getSesion().token);
    }
}