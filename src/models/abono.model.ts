import { credito } from './credito.model';
import { Time } from '@angular/common';
import { cobrador } from './cobrador.model';

export class abono {
    id_abono: number;
    valor_abono: number;
    fecha_registro_abono: Date;
    hora_registro_abono: Time;
    fecha_actualizacion_abono: Date;
    hora_actualizacion_abono: Time;
    fecha_abono: Date;
    credito_abono: number;
    cobrador_abono: number;
    saldo_anterior: number;
    credito?: credito;
    cobrador?: cobrador;
}