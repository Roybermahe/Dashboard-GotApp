import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { indexComponent } from './index.component';
import { tableComponent } from '../components/table/table.component';
import { agregarCreditoComponent } from '../components/agregarCredito/agregarCredito.component';

const routes: Routes = [
    { path: '', component: indexComponent , children : [
        { path: 'table', component: tableComponent },
        { path: 'AgregarCredito', component: agregarCreditoComponent }
    ]}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class indexRoutesModule {}