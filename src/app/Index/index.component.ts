import { Component, OnInit } from "@angular/core";
import { SessionStge } from 'src/services/sessionStorage.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { agregarRutaComponent } from '../components/agregarRuta/agregarRuta.component';
import { agregarClienteComponent } from '../components/agregarCliente/agregarCliente.component';

export type EditorType = 'table' | 'crear-credito';

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class indexComponent implements OnInit {
  public selection: EditorType = 'table';

  constructor(
    private routes: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    !SessionStge.getSesion() ? this.routes.navigateByUrl('/InicioSesion') : null;
  }

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