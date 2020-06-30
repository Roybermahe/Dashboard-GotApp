import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { CobradoresService } from 'src/services/cobradores.service';
import { GastoService } from 'src/services/gasto.service';
import { gasto } from 'src/models/gasto.model';
import { cobrador } from 'src/models/cobrador.model';
import { verifyHostBindings } from '@angular/compiler';
import { tipo_gasto } from 'src/models/tipoGasto.model';

@Component({
	selector: 'gastos',
	templateUrl: './gastos.component.html',
	styleUrls: ['./gastos.component.css']
})

export class GastosComponent implements OnInit {

	displayedColumns: string[] = ['Fecha', 'Hora', 'Valor', 'TipoGasto'];
	@ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
	dataSource = new MatTableDataSource();

	listaGasto: gasto[] = [];
	listaCobradores: cobrador[] = [];
	listaTipoGasto: tipo_gasto[] = [];
	filtroDate: Date = new Date();
	cantidadGastos: number = 0;
	totalGastoFiltro: number = 0;
	totalGasto: number = 0;

	filterDate = (d: Date | null): boolean => {
		const mes = (d || new Date()).getMonth();
		const day = (d || new Date()).getDate();
		const year = (d || new Date()).getFullYear();
		let today = new Date();
		return mes <= today.getMonth() && day <= today.getDate() && year <= today.getFullYear();
	}

	constructor(
		private cobradorService: CobradoresService,
		private gastoService: GastoService
	) { }

	async ngOnInit() {
		await Promise.all([(await this.cobradorService.getCobradores()).subscribe(
			(Response) => {
				this.listaCobradores = Response
			},
			error => console.log(error)
		),
		(await this.gastoService.getTipoGastos()).subscribe(
			(Response) => {
				this.listaTipoGasto = Response
			},
			error => console.log(error)
		),
		(await this.gastoService.getGastos()).subscribe(
			(Response) => {	
				this.listaGasto = Response;
				this.verInformaciónTabla(this.listaGasto);
			},
			error => console.log(error)
		)]);
	}

	verInformaciónTabla(lista: gasto[]) {
		this.dataSource.disconnect();
		this.dataSource = new MatTableDataSource(lista);
		this.dataSource.paginator = this.paginator;
		this.dataSource._updatePaginator(this.dataSource.data.length);
		this.GastosTotales(this.listaGasto);
		this.totalGastoFecha(lista);
	}

	totalGastoFecha(lista: gasto[]) {
		this.totalGastoFiltro = 0;
		lista.forEach(item => {this.totalGastoFiltro =+ item.valor_gasto;});
		this.cantidadGastos = lista.length;
	}

	GastosTotales(lista: gasto[]) {
		this.totalGasto = 0;
		lista.forEach(item =>{ this.totalGasto =+ item.valor_gasto;});
	}

	filterDay() {
		let dia = this.filtroDate.getDate() >= 10 ? this.filtroDate.getDate() : '0' + this.filtroDate.getDate();
		let mes = this.filtroDate.getMonth() >= 10 ? this.filtroDate.getMonth() + 1 : '0' + (this.filtroDate.getMonth() + 1);
		let fecha =  `${this.filtroDate.getFullYear()}-${mes}-${dia}`;
		console.log(fecha);
		this.verInformaciónTabla(this.listaGasto.filter(item => `${item.fecha_registro_gasto}` === fecha));
	}

	verTipoGasto(tipo: number) {
		return this.listaTipoGasto.find(item => item.id_tipo_gasto === tipo).nombre_tipo_gasto;
	}

	limpiarFiltro() {
		this.verInformaciónTabla(this.listaGasto);
	}
}