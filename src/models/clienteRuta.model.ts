import { Time } from '@angular/common';
import { cliente } from './cliente.model';
import { ruta } from './ruta.model';

export class cliente_en_ruta {
    id_cliente_en_ruta?: number;
    fecha_registro_cliente_en_ruta?: Date;
    hora_registro_cliente_en_ruta?: Time;
    fecha_actualizacion_cliente_en_ruta?: Date;
    hora_actualizacion_cliente_en_ruta?: Time;
    ruta_cliente_en_ruta: number;
    cliente_cliente_en_ruta: number;
    cliente?: cliente;
    ruta?: ruta;

    constructor() {}
}