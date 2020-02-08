import { Component } from "@angular/core";
import { SessionStge } from 'src/services/sessionStorage.service';

@Component({
    selector: 'inicio',
    templateUrl: './inicioSesion.component.html',
    styleUrls: ['./inicioSesion.component.css']
})

export class InicioSesionComponent {
    public user: string;
    public password: string;
    constructor () {}

    ComprobarDatos(){
        SessionStge.setSesion({
            user: this.user, 
            password: this.password
        });
    }
}