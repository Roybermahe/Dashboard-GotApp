import { Component } from "@angular/core";

@Component({
    selector: 'filterComponent',
    template: `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title text-center">Filtrar Información</h5>
        <select class="custom-select" id="inputGroupSelect01">
            <option selected>Elejir ruta... </option>
            <option value="1">Ruta 1</option>
            <option value="2">Ruta 2</option>
            <option value="3">Ruta 3</option>
        </select>
       
        </div>
    </div>
    `,
    styleUrls: ['./index.component.css']
})

export class filterComponent {

}