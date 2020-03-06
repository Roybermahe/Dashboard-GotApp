import { Component } from "@angular/core";
import { SessionStge } from 'src/services/sessionStorage.service';
import { Router } from '@angular/router';


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
            <ul class="navbar-nav ml-auto ">
                <li class="nav-item active">
                    <a class="nav-link px-3" href="/Index">Inicio<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link  px-3" href="#">Balance</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link  px-3" href="#">Gastos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link  px-3" href="#">Ajustes</a>
                </li>
                <li class="nav-item">
                    <a class="btn btn-light form-control px-3" href="#" (tap)="cerrarSession()">Salir</a>
                </li>
            </ul>
            </div>
            </div>
        </nav>
    `,
    styleUrls: ['./index.component.css']
})

export class menuNav { 

    constructor (private router: Router) {}

    async cerrarSession() {
        await SessionStge.cerrarSesion();
        this.router.navigateByUrl('/InicioSesion');
    }
}