import { Component, OnInit } from "@angular/core";
import { SessionStge } from 'src/services/sessionStorage.service';
import { Router } from '@angular/router';
import { sessionModel } from 'src/models/session.model';

@Component({
    selector: 'inicio',
    templateUrl: './inicioSesion.component.html',
    styleUrls: ['./inicioSesion.component.css']
})

export class InicioSesionComponent implements OnInit {
    public user: string;
    public password: string;
    public message: boolean = false;
    constructor (private readonly routes: Router, private sesionService : SessionStge) {}

    async ngOnInit() {
    }

    async ComprobarDatos(){
        try {

            let data : sessionModel = { User: this.user, Pass: this.password };
            let observable = await this.sesionService.pedirToken(data);
            observable.subscribe( (Response: any) => {
                if(Response) {
                    data.Id     = Response.Id;
                    data.token  = Response.token;
                    SessionStge.setSesion(data);
                    this.routes.navigateByUrl('/Index')
                }else {
                    this.message = true;
                }
            } ,
                error => console.log(error)
            );
        } catch (error) {
            console.log(error);
            this.message = true;
        }
    }
}