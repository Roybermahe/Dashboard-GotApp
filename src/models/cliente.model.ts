import { Time } from '@angular/common';
import { cliente_en_ruta } from './clienteRuta.model';
import { credito } from './credito.model';

export class cliente {
    id_cliente?: number;
    numero_identificacion_cliente: string;
    primer_nombre_cliente: string;
    segundo_nombre_cliente: string;
    primer_apellido_cliente: string;
    segundo_apellido_cliente: string;
    genero_cliente: number;
    direccion_cliente: string;
    telefono_cliente: string;
    fecha_nacimiento_cliente: Date;
    fecha_registro_cliente?: Date;
    hora_registro_cliente?: Time;
    fecha_actualizacion_cliente?: Date;
    hora_actualizacion_cliente?: Time;
    clientesRuta?: cliente_en_ruta[];
    credito?: credito[];

    constructor() {
        
    }
}