import { Component, OnInit } from "@angular/core";
import { SessionStge } from 'src/services/sessionStorage.service';
import { Router } from '@angular/router';


@Component({
    selector: 'index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})

export class indexComponent implements OnInit {

    constructor( private routes : Router) {}

    ngOnInit() {
       !SessionStge.getSesion() ? this.routes.navigateByUrl('/InicioSesion'): null;
    }
}