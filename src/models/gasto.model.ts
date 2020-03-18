import { Time } from '@angular/common';
import { cobrador } from './cobrador.model';
import { tipo_gasto } from './tipoGasto.model';

export class gasto {
    id_gasto: number;
    valor_gasto: number;
    fecha_registro_gasto: Date;
    hora_registro_gasto: Time;
    fecha_actualizacion_gasto: Date;
    hora_actualizacion_gasto: Time;
    tipo_gasto_gasto: number;
    cobrador_gasto: number;
    comprobante_gasto: string;
    descripcion_gasto: string;
    tipo_gasto?: tipo_gasto;
    cobrador?: cobrador;

}