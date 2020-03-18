import { Component, ViewChild, ElementRef } from "@angular/core";

@Component({
    selector: 'filter-Component',
    template: `
    <mat-card style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title text-center">Filtrar Información</h5>
        <select class="custom-select" #sltRuta>
            <option selected>Elejir ruta... </option>
            <option value="1">Ruta 1</option>
            <option value="2">Ruta 2</option>
            <option value="3">Ruta 3</option>
        </select>
        <div class="my-2">
            <div class="form-check" *ngFor = "let item of listaFiltros; index as i ">
                <input class="form-check-input" type="checkbox"[(ngModel)]="item.checked"  id="{{i}}">
                <label class="form-check-label d-block" for="{{i}}">{{ item.Nombre }}</label>
            </div>
        </div>
        <button class="btn form-control btn-filter text-dark" (tap)="filtrar()" >Filtrar</button>
        </div>
    </mat-card>
    `,
    styleUrls: ['./filters.component.css']
})

export class filterComponent {
    @ViewChild('sltRuta', { static: true }) SltRuta : ElementRef;
    public listaFiltros: ListaFilters[] =
        [{ Nombre: 'Todos', checked: false },
        { Nombre: 'Activos', checked: false },
        { Nombre: 'Atrazados', checked: false },
        { Nombre: 'Avanzados', checked: false },
        { Nombre: 'Vencidos', checked: false },
        { Nombre: 'Ocultos', checked: false }];
    
    constructor() {}
    
    filtrar() {
        console.log(this.SltRuta.nativeElement.value);
        console.table(this.listaFiltros);
    }
}

interface ListaFilters {
    Nombre: string,
    checked: boolean
}