import { Component } from "@angular/core";
import { rutaService } from 'src/services/ruta.service';
import { ruta } from 'src/models/ruta.model';

@Component({
    selector: 'agregar-ruta-dialog',
    template: `
    <form (ngSubmit)="rutaForm.form.valid && onSubmit()" #rutaForm="ngForm">
        <h2 mat-dialog-title>Agregar ruta</h2>
        <mat-dialog-content class="mat-typography">
            <mat-form-field appearance="outline">
                <mat-label>Nombre de la ruta</mat-label>
                <input matInput type="text" name="nombre-ruta" [(ngModel)]="ruta.nombre_ruta" placeholder="ej: ruta 1, ruta 2, ..." require>
            </mat-form-field>
        </mat-dialog-content>
        <mat-dialog-actions align="end">
        <button mat-button mat-dialog-close>Cancel</button>
        <button type="submit" mat-button [mat-dialog-close]="true" cdkFocusInitial>Guardar</button>
        </mat-dialog-actions>
    </form>
    `,
    styleUrls: ['./agregarRuta.component.css']
})

export class agregarRutaComponent {
    public ruta: ruta = new ruta();

    constructor(
        private rutaService: rutaService
    ) {}

    async onSubmit() {
        (await this.rutaService.guardarRuta(this.ruta)).subscribe();
    }
}