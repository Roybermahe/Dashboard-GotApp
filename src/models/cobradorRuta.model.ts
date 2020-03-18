import { Time } from '@angular/common';
import { ruta } from './ruta.model';
import { cobrador } from './cobrador.model';

export class cobrador_en_ruta {
    id_cobrador_en_ruta: number;
    fecha_registro_cobrador_en_ruta: Date;
    hora_registro_cobrador_en_ruta: Time;
    fecha_actualizacion_cobrador_en_ruta: Date;
    hora_actualizacion_cobrador_en_ruta: Time;
    ruta_cobrador_en_ruta: number;
    cobrador_cobrador_en_ruta: number;
    cobrador?: cobrador;
    ruta?: ruta;
}