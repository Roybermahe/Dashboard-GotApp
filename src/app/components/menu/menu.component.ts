import { Component, Output, EventEmitter } from "@angular/core";
import { SessionStge } from 'src/services/sessionStorage.service';
import { Router } from '@angular/router';
import { menuTypes } from 'src/types';


@Component({
    selector: 'nav-menu',
    template: `
        <nav class="navbar navbar-expand-lg navbar-light ">
            <div class="container">
            <a class="navbar-brand" href="/Index">GotApp</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarNav">
            <ul class="navbar-nav ml-auto navLinks">
                <li class="nav-item" [ngClass]="{active: seleccion == 'inicio'}">
                    <a class="nav-link px-3" (tap)="goTo('inicio')" >Inicio</a>
                </li>
                <li class="nav-item" [ngClass]="{active: seleccion == 'balance'}">
                    <a class="nav-link  px-3" (tap)="goTo('balance')" >Balance</a>
                </li>
                 <li class="nav-item" [ngClass]="{active: seleccion == 'ajustes'}">
                    <a class="nav-link  px-3" (tap)="goTo('ajustes')" >Ajustes</a>
                </li>
                <li class="nav-item">
                    <a class="btn btn-light form-control px-3" (tap)="cerrarSession()">Salir</a>
                </li>
            </ul>
            </div>
            </div>
        </nav>
    `,
    styleUrls: ['./menu.component.css']
})

export class menuNav {
    seleccion: menuTypes = 'inicio'; 
    @Output() opcion = new EventEmitter<menuTypes>();

    constructor (private router: Router) {}

    async cerrarSession() {
        await SessionStge.cerrarSesion();
        this.router.navigateByUrl('/InicioSesion');
    }

    async goTo(opcion: menuTypes) {
        this.seleccion = opcion;
        this.opcion.emit(opcion);
    }
}