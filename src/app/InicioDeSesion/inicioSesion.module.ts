import { NgModule } from "@angular/core";
import { InitSesionRoutingModule } from './inicioSesion.routing';
import { InicioSesionComponent } from './inicioSesion.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        InicioSesionComponent
    ],
    imports: [
        InitSesionRoutingModule,
        CommonModule,
        FormsModule
    ],
    exports: [],
    bootstrap: [InicioSesionComponent]
})

export class InicioSesionModule {}