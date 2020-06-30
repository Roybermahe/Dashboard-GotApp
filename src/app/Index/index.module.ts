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
import { inicioPage } from './inicio/inicio.component';
import { AbonosComponent } from '../components/abonos/abonos.component';
import { BalanceComponent } from './balance/balance.component';
import { PlenosComponent } from '../components/plenos/plenos.component';
import { GastosComponent } from '../components/gastos/gastos.component';

@NgModule({
    declarations: [
        indexComponent,
        inicioPage,
        menuNav,
        filterComponent,
        tableComponent,
        agregarRutaComponent,
        agregarClienteComponent,
        agregarCreditoComponent,
        AbonosComponent,
        PlenosComponent,
        GastosComponent,
        BalanceComponent
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