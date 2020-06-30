import { Component, OnInit, ViewChild } from '@angular/core';
import { creditoService } from 'src/services/creditos.service';
import { clienteService } from 'src/services/cliente.service';
import { credito } from 'src/models/credito.model';
import { cliente } from 'src/models/cliente.model';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { AbonoService } from 'src/services/abono.service';
import { abono } from 'src/models/abono.model';

@Component({
	selector: 'abonos',
	templateUrl: './abonos.component.html',
	styleUrls: ['./abonos.component.css']
})

export class AbonosComponent implements OnInit {
	displayedColumns: string[] = ['tarjeta', 'cliente', 'abono', 'debe', 'Hora'];
	@ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
	dataSource = new MatTableDataSource();
	listaDeClientes: cliente[] = [];
	listaDeCreditos: credito[] = [];
	listaDeAbonos: abono[] = [];

	filtroDate: Date = new Date();
	sumaTotalAbonos: number = 0;
	cantidadAbonos: number = 0;


	filterDate = (d: Date | null): boolean => {
		const mes = (d || new Date()).getMonth();
		const day = (d || new Date()).getDate();
		const year = (d || new Date()).getFullYear();
		let today = new Date();
		return mes <= today.getMonth() && day <= today.getDate() && year <= today.getFullYear();
	}

	constructor(
		private readonly creditoSvc: creditoService,
		private readonly clienteSvc: clienteService,
		private readonly abonoSvc: AbonoService
	) { }

	async ngOnInit() {
		await Promise.all([(await this.creditoSvc.getCreditos()).subscribe(
			(Response: credito[]) => {
				this.listaDeCreditos = Response
			},
			error => console.log(error)
		),
		(await this.clienteSvc.getClientes()).subscribe(
			(Response: cliente[]) => this.listaDeClientes = Response,
			error => console.log(error)
		),
		(await this.abonoSvc.getAbonos()).subscribe(
			Response => {
				this.listaDeAbonos = Response;
				this.verInformaciónTabla(this.listaDeAbonos);
			},
			error => console.log(error)
		)
		]);
	}

	verInformaciónTabla(lista: abono[]) {
		this.dataSource.disconnect();
		this.dataSource = new MatTableDataSource(lista);
		this.dataSource.paginator = this.paginator;
		this.dataSource._updatePaginator(this.dataSource.data.length);
		this.sumaAbonos(lista);
		this.cantAbonos(lista);
	}

	obtenerCliente(credito: credito) {
		credito.ClienteCredito = <cliente>{
			primer_nombre_cliente: '',
			primer_apellido_cliente: ''
		};
		credito.ClienteCredito = <cliente>this.listaDeClientes.find(item => item.id_cliente === credito.cliente_credito);
		return credito.ClienteCredito ? credito.ClienteCredito.primer_nombre_cliente + ' ' + credito.ClienteCredito.primer_apellido_cliente : null;
	}

	obtenerIdentificacion(credito: number) {
		return this.listaDeClientes.find(item => item.id_cliente === this.listaDeCreditos.find(item => item.id_credito === credito).cliente_credito).numero_identificacion_cliente;
	}

	valorDebe(abono: abono) {
		let credito = this.listaDeCreditos.find(item => item.id_credito === abono.credito_abono);
		credito.valor_restante_credito = credito.valor_credito - credito.valor_abonado_credito;
		return credito.valor_restante_credito - abono.valor_abono;
	}

	sumaAbonos(lista: abono[]) {
		this.sumaTotalAbonos = 0;
		lista.forEach(item => {
			this.sumaTotalAbonos =+ item.valor_abono
		});
	}

	cantAbonos(lista: abono[]) {
		this.cantidadAbonos = lista.length;
	}

	filterDay() {
		let dia = this.filtroDate.getDate() >= 10 ? this.filtroDate.getDate() : '0' + this.filtroDate.getDate();
		let mes = this.filtroDate.getMonth() >= 10 ? this.filtroDate.getMonth() + 1 : '0' + (this.filtroDate.getMonth() + 1);
		let fecha =  `${this.filtroDate.getFullYear()}-${mes}-${dia}`;
		console.log(fecha);
		this.verInformaciónTabla(this.listaDeAbonos.filter(item => `${item.fecha_registro_abono}` === fecha));
	}

	limpiarFiltro() {
		this.verInformaciónTabla(this.listaDeAbonos);
	}
}