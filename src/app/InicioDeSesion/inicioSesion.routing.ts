import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { InicioSesionComponent } from './inicioSesion.component';

const routes: Routes = [
    { path: '', component: InicioSesionComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class InitSesionRoutingModule {}