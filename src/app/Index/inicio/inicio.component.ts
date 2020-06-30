import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { agregarRutaComponent } from 'src/app/components/agregarRuta/agregarRuta.component';
import { agregarClienteComponent } from 'src/app/components/agregarCliente/agregarCliente.component';

export type EditorType = 'table' | 'crear-credito';

@Component({
    selector: 'inicio-page',
    styleUrls: ['./inicio.component.css'],
    templateUrl: './inicio.component.html'
})

export class inicioPage {
    public selection: EditorType = 'table';
    constructor(
        private routes: Router,
        private dialog: MatDialog
    ) { }
    agregarRutaDialog() {
        this.dialog.open(agregarRutaComponent)
            .afterClosed().subscribe(result => console.log(result));
    }

    agregarClienteDialog() {
        this.dialog.open(agregarClienteComponent)
            .afterClosed().subscribe(result => console.log(result));
    }

    get showTable() {
        return this.selection === 'table';
    }

    get showCrearCredito() {
        return this.selection === 'crear-credito';
    }

    selectView(type: EditorType) {
        this.selection = type;
    }
}