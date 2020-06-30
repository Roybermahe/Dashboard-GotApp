import { Component, OnInit } from "@angular/core";
import { SessionStge } from 'src/services/sessionStorage.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { agregarRutaComponent } from '../components/agregarRuta/agregarRuta.component';
import { agregarClienteComponent } from '../components/agregarCliente/agregarCliente.component';
import { menuTypes } from 'src/types';

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class indexComponent implements OnInit {
  
  page: menuTypes = 'inicio';

  constructor(
    private routes: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    !SessionStge.getSesion() ? this.routes.navigateByUrl('/InicioSesion') : null;
  }

  seleccionado(event: menuTypes) {
    this.page =  event;
  }
}