import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cliente } from 'src/models/cliente.model';
import { clienteService } from 'src/services/cliente.service';
import { ruta } from 'src/models/ruta.model';
import { rutaService } from 'src/services/ruta.service';
import { credito } from 'src/models/credito.model';
import { cliente_en_ruta } from 'src/models/clienteRuta.model';
import { creditoService } from 'src/services/creditos.service';
import { clientesRutaService } from 'src/services/clientesRuta.service';

@Component({
    selector: 'agregar-credito',
    template: `
        <mat-horizontal-stepper [linear]="isLinear" #stepper>
            <mat-step [stepControl]="firstFormGroup">
            <form [formGroup]="firstFormGroup" >
                <ng-template matStepLabel>Cliente</ng-template>
                <mat-radio-group
                  aria-labelledby="example-radio-group-label"
                  class="example-radio-group"
                  formControlName="ClienteElegido" required>
                  <mat-radio-button class="example-radio-button" *ngFor="let cliente of clientes" [value]="cliente.id_cliente">
                    {{ NombreCompleto(cliente) }}
                  </mat-radio-button>
                </mat-radio-group>
                <div>
                    <button [disabled]="!firstFormGroup.valid" mat-button matStepperNext>Siguiente</button>
                </div>
            </form>
            </mat-step>
            <mat-step [stepControl]="secondFormGroup">
                <form [formGroup]="secondFormGroup" >
                    <ng-template matStepLabel>Ruta</ng-template>
                    <mat-radio-group
                    aria-labelledby="example-radio-group-label"
                    class="example-radio-group"
                    formControlName="rutaElegida" required>
                    <mat-radio-button class="example-radio-button" *ngFor="let ruta of rutas" [value]="ruta.id_ruta">
                      {{ ruta.nombre_ruta }}
                    </mat-radio-button>
                    </mat-radio-group>
                    <div>
                        <button mat-button matStepperPrevious>Back</button>
                        <button [disabled]="!secondFormGroup.valid" mat-button matStepperNext>Next</button>
                    </div>
                </form>
            </mat-step>
            <mat-step>
                <ng-template matStepLabel>Credito</ng-template>
                <p>Registro del credito</p>
                <form [formGroup]="thirdFormGroup">
                    <mat-form-field appearance="outline">
                        <mat-label>Valor del credito</mat-label>
                        <input matInput type="number" formControlName="valorCredito"  placeholder="Ejm: 10000, 50000, ..." require>
                    </mat-form-field>
                    <br>
                    <mat-form-field appearance="outline">
                        <mat-label>Valor abonado</mat-label>
                        <input matInput type="number" formControlName="valorAbonado"  placeholder="Ejm: 10000, 50000, ...">
                    </mat-form-field>
                    <br>
                    <mat-form-field appearance="outline">
                        <mat-label>Porcentaje de credito</mat-label>
                        <input matInput type="number"  formControlName="porcentajeCredito"  placeholder="Ejm: 5 , 4, 10 ...">
                    </mat-form-field>
                    <br>
                    <mat-form-field appearance="outline">
                        <mat-label>numero de cuotas </mat-label>
                        <input matInput type="number" formControlName="numeroCuotas"  placeholder="Ejm: 1, 2, 3, 4, 5, 6, ..." required>
                    </mat-form-field>
                    <br>
                    <mat-form-field appearance="outline">
                        <mat-label>Observaciones</mat-label>
                        <input matInput type="text" formControlName="Observaciones"  placeholder="Ejm: 1, 2, 3, 4, 5, 6, ..." required>
                    </mat-form-field>   
                </form>
                <div> 
                    <button mat-button matStepperPrevious>Back</button>
                    <button [disabled]="!thirdFormGroup.valid" (click)="onFinalStepper()" mat-button matStepperNext>Next</button>
                </div>
            </mat-step>
            <mat-step>
                <ng-template matStepLabel>Finalizar</ng-template>
                <div class="row">
                    <div class="col-md-5">
                        <h6>Cliente:</h6>
                    </div>
                    <div class="col-md-7">
                        <p *ngIf="firstFormGroup.valid" >{{ NombreCompleto(returnCliente()) }}</p>
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-md-5">
                        <h6>Ruta:</h6>
                    </div>
                    <div class="col-md-7">
                        <p *ngIf="secondFormGroup.valid" >{{ returnRuta().nombre_ruta }}</p>
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-md-5">
                        <h6>Valor del credito:</h6>
                    </div>
                    <div class="col-md-7">
                        <p *ngIf="creditoNuevo.valor_credito" >{{creditoNuevo.valor_credito | currency : 'COP' : '$' : '1.2-2'}}</p>
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-md-5">
                        <h6>Valor abonado:</h6>
                    </div>
                    <div class="col-md-7">
                        <p *ngIf="creditoNuevo.valor_abonado_credito" >{{ creditoNuevo.valor_abonado_credito | currency : 'COP' : '$' : '1.2-2' }}</p>
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-md-5">
                        <h6>Valor restante:</h6>
                    </div>
                    <div class="col-md-7">
                        <p *ngIf="creditoNuevo.valor_restante_credito" >{{ creditoNuevo.valor_restante_credito | currency : 'COP' : '$' : '1.2-2'}}</p>
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-md-5">
                        <h6>Porcentaje del credito:</h6>
                    </div>
                    <div class="col-md-7">
                        <p *ngIf="creditoNuevo.porcentaje_credito" >{{ creditoNuevo.porcentaje_credito }}</p>
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-md-5">
                        <h6>Número de cuotas:</h6>
                    </div>
                    <div class="col-md-7">
                        <p *ngIf="creditoNuevo.numero_cuotas_credito" >{{ creditoNuevo.numero_cuotas_credito }}</p>
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-md-5">
                        <h6>Valor de las cuotas:</h6>
                        <span>formula: <i>((Valor restante * Porcentaje credito) + Valor restante)/ número de cuotas</i></span>
                    </div>
                    <div class="col-md-7">
                        <p *ngIf="creditoNuevo.valor_cuota_credito" >{{ creditoNuevo.valor_cuota_credito | currency : 'COP' : '$' : '1.2-2' }}</p>
                    </div>
                </div>
                <br>
                <div>
                    <p>Al hacer click en confirmar se guardara este credito</p>
                    <button mat-button matStepperPrevious>Back</button>
                    <button mat-button (click)="guardarDatos()">Confirmar</button>
                </div>
            </mat-step>
        </mat-horizontal-stepper>
    `,
    styleUrls: ['./agregarCredito.component.css']
})

export class agregarCreditoComponent implements OnInit {
    isLinear = true;
    creditoNuevo: credito = new credito();
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    thirdFormGroup: FormGroup;
    clienteRuta: cliente_en_ruta;
    public clientes: cliente[] = [];
    public rutas: ruta[] = [];
    
    constructor(
        private _formBuilder: FormBuilder,
        private clienteService: clienteService,
        private rutaService: rutaService,
        private creditoService: creditoService,
        private clientesRutaService: clientesRutaService
    ) {}

    async ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            ClienteElegido: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            rutaElegida: ['', Validators.required]
        });
        this.thirdFormGroup = this._formBuilder.group({
            valorCredito: ['', Validators.required],
            valorAbonado: [0],
            porcentajeCredito: ['', Validators.required],
            numeroCuotas: ['', Validators.required],
            Observaciones: ['']
        });
        await this.cargarStepper();
    }

    async cargarStepper() {
        (await this.clienteService.getClientes()).subscribe(
            Response => this.clientes = Response,
            error => console.log(error)
        );
        (await this.rutaService.getRutas()).subscribe(
            Response => this.rutas = Response,
            error => console.log(error)
        );
    }

    async onFinalStepper() {
        this.creditoNuevo.cliente_credito = <number>this.firstFormGroup.get('ClienteElegido').value;
        this.clienteRuta = <cliente_en_ruta>{
            ruta_cliente_en_ruta: <number>this.secondFormGroup.get('rutaElegida').value,
            cliente_cliente_en_ruta: this.creditoNuevo.cliente_credito
        };
        this.creditoNuevo.valor_credito = <number>this.thirdFormGroup.get('valorCredito').value;
        this.creditoNuevo.valor_abonado_credito = <number>this.thirdFormGroup.get('valorAbonado').value;
        this.creditoNuevo.porcentaje_credito = <number>(this.thirdFormGroup.get('porcentajeCredito').value / 100);
        this.creditoNuevo.numero_cuotas_credito = <number>this.thirdFormGroup.get('numeroCuotas').value;
        this.creditoNuevo.observaciones = <string>this.thirdFormGroup.get('Observaciones').value;
        this.creditoNuevo.valor_restante_credito = <number>(this.creditoNuevo.valor_credito - this.creditoNuevo.valor_abonado_credito);
        this.creditoNuevo.valor_cuota_credito = ((
            (this.creditoNuevo.valor_restante_credito*this.creditoNuevo.porcentaje_credito) + this.creditoNuevo.valor_restante_credito)
            /this.creditoNuevo.numero_cuotas_credito);
    }

    NombreCompleto(cliente: cliente){
        return cliente.primer_nombre_cliente + " " 
            + cliente.segundo_nombre_cliente + " "
            + cliente.primer_apellido_cliente + " "
            + cliente.segundo_nombre_cliente;
    }

    returnCliente() {
        return this.clientes.find(item => item.id_cliente === <number>this.firstFormGroup.get('ClienteElegido').value);
    }

    returnRuta() {
        return this.rutas.find(item => item.id_ruta === <number>this.secondFormGroup.get('rutaElegida').value);
    }

    async guardarDatos() {
       await Promise.all([(await this.clientesRutaService.postClienteRutas(this.clienteRuta)).subscribe(),
            (await this.creditoService.guardarCredito(this.creditoNuevo)).subscribe()]);
    }
}