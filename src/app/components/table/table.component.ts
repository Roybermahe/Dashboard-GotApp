import {Component, ViewChild, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material';
import { creditoService } from 'src/services/creditos.service';
import { credito } from 'src/models/credito.model';
import { cliente } from 'src/models/cliente.model';
import { clienteService } from 'src/services/cliente.service';
import { throws } from 'assert';

@Component({
  selector: 'table-component',
  styleUrls: ['./table.component.css'],
  template: `
    <table mat-table [dataSource]="listaDeCreditos" class="mat-elevation-z8">

      <ng-container matColumnDef="NombreCompleto">
        <th mat-header-cell *matHeaderCellDef> Nombre completo </th>
        <td mat-cell *matCellDef="let credito"> {{obtenerCliente(credito)}} </td>
      </ng-container>

      <ng-container matColumnDef="Observaciones">
        <th mat-header-cell *matHeaderCellDef> Observación </th>
        <td mat-cell *matCellDef="let credito"> {{credito.observaciones}} </td>
      </ng-container>

      <ng-container matColumnDef="Prestado">
        <th mat-header-cell *matHeaderCellDef> Prestado </th>
        <td mat-cell *matCellDef="let credito"> {{credito.valor_credito | currency : 'COP' : '$' : '1.2-2' }} </td>
      </ng-container>

      <ng-container matColumnDef="FechaPrestamo">
        <th mat-header-cell *matHeaderCellDef> Fecha de prestamo </th>
        <td mat-cell *matCellDef="let credito"> {{ credito.fecha_registro_credito | date }} </td>
      </ng-container>

      <ng-container matColumnDef="ValorCuota">
        <th mat-header-cell *matHeaderCellDef>Valor de cuotas  </th>
        <td mat-cell *matCellDef="let credito"> {{ credito.valor_cuota_credito | currency : 'COP' : '$' : '1.2-2'  }} </td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
    </table>
    <mat-paginator [pageSizeOptions]="[5, 10, 20]" showFirstLastButtons></mat-paginator>
  `,
})

export class tableComponent implements OnInit{
  displayedColumns: string[] = ['NombreCompleto', 'Observaciones','Prestado','FechaPrestamo','ValorCuota'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource: any;
  listaDeClientes: cliente[] = [];
  listaDeCreditos: credito[] = [];
  constructor(
    private readonly creditoSvc: creditoService,
    private readonly clienteSvc: clienteService 
  ) {}

  async ngOnInit() {
    await Promise.all([(await this.creditoSvc.getCreditos()).subscribe(
      (Response: credito[]) => this.listaDeCreditos = Response,
      error => console.log(error)
    ) , 
    (await this.clienteSvc.getClientes()).subscribe(
      (Response: cliente[]) => this.listaDeClientes = Response,
      error => console.log(error)
    )
  ]);

    this.dataSource = new MatTableDataSource(this.listaDeCreditos);
    this.dataSource.paginator = this.paginator;
  }

  obtenerCliente(credito: credito) {
    credito.ClienteCredito = <cliente>{
      primer_nombre_cliente: '',
      primer_apellido_cliente: ''
    };
    credito.ClienteCredito = <cliente>this.listaDeClientes.find(item => item.id_cliente === credito.cliente_credito); 
    return credito.ClienteCredito ? credito.ClienteCredito.primer_nombre_cliente + ' ' + credito.ClienteCredito.primer_apellido_cliente : null;
  }
}