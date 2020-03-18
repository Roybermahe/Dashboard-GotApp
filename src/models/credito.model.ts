import { Time } from '@angular/common';
import { abono } from './abono.model';
import { cobrador } from './cobrador.model';
import { cliente } from './cliente.model';

export class credito {
    id_credito?: number;
    valor_credito: number;
    valor_abonado_credito: number;
    valor_restante_credito: number;
    fecha_registro_credito?: Date;
    hora_registro_credito?: Time;
    fecha_actualizacion_credito?: Date;
    hora_actualizacion_credito?: Time;
    cliente_credito: number;
    registrado_por_credito?: number;
    porcentaje_credito: number;
    pago_a_credito?: number;
    cancelado_credito?: number;
    eliminado_credito?: number;
    numero_cuotas_credito: number;
    gasto_papeleria?: number;
    observaciones: string;
    cuotas_pagas_credito?: number;
    valor_cuota_credito: number;
    numero_cuotas_canceladas_credito?: number;
    fecha_ultimo_pago?: Date;
    hora_ultimo_pago?: Time;
    fecha_paso_credito?: Time;
    CobradorCredito?: cobrador;
    ClienteCredito?: cliente;
    Abonos?: abono[];

    constructor() {

    }
}