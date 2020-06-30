import { Component, OnInit } from '@angular/core';
import { balanceTypes } from 'src/types';

@Component({
	selector: 'balance-page',
	templateUrl: './balance.component.html',
	styleUrls: ['./balance.component.css']
})

export class BalanceComponent implements OnInit {

	selection: balanceTypes = 'abonos';
	constructor() { }

	ngOnInit() { }

	selectView(opcion: balanceTypes) {
		this.selection = opcion;
	}

}