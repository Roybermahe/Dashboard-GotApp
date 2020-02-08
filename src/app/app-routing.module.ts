import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioSesionModule } from './InicioDeSesion/inicioSesion.module';


const routes: Routes = [
  {path: '', redirectTo: '/InicioSesion', pathMatch: 'full'},
  {path: 'InicioSesion', loadChildren: () => import('./InicioDeSesion/inicioSesion.module').then(m => m.InicioSesionModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
