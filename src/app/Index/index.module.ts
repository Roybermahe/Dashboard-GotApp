import { NgModule } from "@angular/core";
import { indexComponent } from './index.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { indexRoutesModule } from './index.routing';
import { menuNav } from '../components/menu/menu.component';
import { filterComponent } from '../components/filters/filters.component';
import { tableComponent } from '../components/table/table.component';
import { MaterialModule } from '../material.module';
import { agregarRutaComponent } from '../components/agregarRuta/agregarRuta.component';
import { agregarClienteComponent } from '../components/agregarCliente/agregarCliente.component';
import { agregarCreditoComponent } from '../components/agregarCredito/agregarCredito.component';

@NgModule({
    declarations: [
        indexComponent,
        menuNav,
        filterComponent,
        tableComponent,
        agregarRutaComponent,
        agregarClienteComponent,
        agregarCreditoComponent
    ],
    imports: [
        indexRoutesModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule
    ],
    exports: [],
    entryComponents: [
        agregarRutaComponent,
        agregarClienteComponent
    ],
    bootstrap: [indexComponent]
})

export class indexModule {}