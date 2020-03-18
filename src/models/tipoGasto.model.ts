import { Time } from '@angular/common';
import { gasto } from './gasto.model';

export class tipo_gasto {
    id_tipo_gasto: number;
    nombre_tipo_gasto: string;
    fecha_registro_tipo_gasto: Date;
    hora_registro_tipo_gasto: Time;
    fecha_actualizacion_tipo_gasto: Date;
    hora_actualizacion_tipo_gasto: Time;
    GastosAsociados?: gasto[];
}