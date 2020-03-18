import { Time } from '@angular/common';
import { cliente_en_ruta } from './clienteRuta.model';
import { cobrador_en_ruta } from './cobradorRuta.model';

export class ruta {
    id_ruta?: number;
    nombre_ruta: string;
    fecha_registro_ruta: Date;
    hora_registro_ruta: Time;
    fecha_actualizacion_ruta: Date;
    hora_actualizacion_ruta: Time;
    numero_clientes_ruta?: number;
    numero_cobradores_ruta?: number;
    clienteRutas?: cliente_en_ruta[];
    cobradorRutas?: cobrador_en_ruta[];
    
    constructor() {
        this.nombre_ruta = ''
    }
}