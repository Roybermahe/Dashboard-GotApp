import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioSesionModule } from './InicioDeSesion/inicioSesion.module';


const routes: Routes = [
  { path: '', redirectTo: '/InicioSesion', pathMatch: 'full' },
  { path: 'InicioSesion', loadChildren: () => import('./InicioDeSesion/inicioSesion.module').then(m => m.InicioSesionModule) },
  { path: 'Index', loadChildren: () => import('./Index/index.module').then(m => m.indexModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
