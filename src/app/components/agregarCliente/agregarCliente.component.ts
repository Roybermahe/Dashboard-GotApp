import { Component, ViewChild, ElementRef } from "@angular/core";
import { cliente } from 'src/models/cliente.model';
import { MatDatepicker, MatSelect } from '@angular/material';
import { clienteService } from 'src/services/cliente.service';

@Component({
    selector: 'agregar-cliente-dialog',
    template: `
    <form (ngSubmit)="clienteForm.form.valid && onSubmit()" #clienteForm="ngForm">
    <h2 mat-dialog-title>Agregar cliente</h2>
    <mat-dialog-content class="mat-typography">
        <mat-form-field appearance="outline">
            <mat-label>Identificación  <span class="text-danger">*</span></mat-label>
            <input matInput type="number" name="identificacion" [(ngModel)]="cliente.numero_identificacion_cliente" placeholder="Digite la identificación" require>
        </mat-form-field>   
        <div class="row">
            <div class="col-md-6">            
                <mat-form-field appearance="outline">
                    <mat-label>Primer nombre  <span class="text-danger">*</span></mat-label>
                    <input matInput type="text" name="primer-nombre" [(ngModel)]="cliente.primer_nombre_cliente" placeholder="Digita el primer nombre" require>
                </mat-form-field>
            </div>
            <div class="col-md-6">
                <mat-form-field appearance="outline">
                    <mat-label>Segundo nombre</mat-label>
                    <input matInput type="text" name="segundo-nombre" [(ngModel)]="cliente.segundo_nombre_cliente" placeholder="Digita el segundo nombre">
                </mat-form-field>
            </div>
        </div> 
        <div class="row">
            <div class="col-md-6">
                <mat-form-field appearance="outline">
                    <mat-label>Primer Apellido  <span class="text-danger">*</span></mat-label>
                    <input matInput type="text" name="primer-apellido" [(ngModel)]="cliente.primer_apellido_cliente" placeholder="Digita el primer apellido" require>
                </mat-form-field>               
            </div>
            <div class="col-md-6">
                <mat-form-field appearance="outline">
                    <mat-label>Segundo Apellido</mat-label>
                    <input matInput type="text" name="segundo-apellido" [(ngModel)]="cliente.segundo_apellido_cliente" placeholder="Digita el segundo apellido">
                </mat-form-field>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
            <mat-form-field appearance="outline">
                <mat-label>Genero</mat-label>
                <mat-select [(ngModel)] = "cliente.genero_cliente" name="generoCliente">
                <mat-option *ngFor="let genero of generos" [value]="genero.value">
                    {{genero.descripcion}}
                </mat-option>
                </mat-select>
            </mat-form-field>
            </div>
        </div>
        <mat-form-field appearance="outline">
            <mat-label>Dirección  <span class="text-danger">*</span></mat-label>
            <input matInput type="text" name="direccion" [(ngModel)]="cliente.direccion_cliente" placeholder="Ej: Calle 16 # 18a - xx" require>
        </mat-form-field>
        <mat-form-field appearance="outline">
            <mat-label>Telefono <span class="text-danger">*</span></mat-label>
            <input matInput type="tel" name="telefono" [(ngModel)]="cliente.telefono_cliente" placeholder="Ej: 3136252314 . . ." require>
        </mat-form-field> 
        <mat-form-field appearance="outline">
            <mat-label>fecha de nacimiento</mat-label>
            <input matInput [matDatepicker]="fechaNacimiento" required>
            <mat-datepicker-toggle matSuffix [for]="fechaNacimiento"></mat-datepicker-toggle>
            <mat-datepicker #fechaNacimiento></mat-datepicker>
        </mat-form-field>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Cancel</button>
      <button mat-button type="submit" [mat-dialog-close]="true" cdkFocusInitial>Guardar</button>
    </mat-dialog-actions>
    </form>
    `,
    styleUrls: [ './agregarCliente.component.css']
})

export class agregarClienteComponent {
    @ViewChild('fechaNacimiento', {static: true }) fechaNacimiento: MatDatepicker<Date>;
    public cliente: cliente;
    public generos: genero[] = [
        {value: 1, descripcion: 'Masculino'},
        {value: 2, descripcion: 'Femenino'},
        {value: 3, descripcion: 'Otro'}
    ];

    constructor(private clienteService: clienteService) {
        this.cliente = new cliente();
    }

    async onSubmit(){
        this.cliente.fecha_nacimiento_cliente = this.fechaNacimiento._selected;
        (await this.clienteService.guardarCliente(this.cliente)).subscribe();
    }
}

interface genero {
    value: number,
    descripcion: string
}
