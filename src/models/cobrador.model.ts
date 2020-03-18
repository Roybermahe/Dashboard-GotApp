import { Time } from '@angular/common';
import { abono } from './abono.model';
import { credito } from './credito.model';
import { cobrador_en_ruta } from './cobradorRuta.model';
import { gasto } from './gasto.model';

export class cobrador {
    id_cobrador: number;
    numero_identificacion_cobrador: string;
    nombre_cuenta_cobrador: string;
    contraseña_cobrador: string;
    primer_nombre_cobrador: string;
    segundo_nombre_cobrador: string;
    primer_apellido_cobrador: string;
    segundo_apellido_cobrador: string;
    genero_cobrador: number;
    direccion_cobrador: string;
    telefono_cobrador: string;
    fecha_nacimiento_cobrador: Date;
    fecha_registro_cobrador: Date;
    hora_registro_cobrador: Time;
    fecha_actualizacion_cobrador: Date;
    hora_actualizacion_clobrador: Time;
    estado_cobrador: number;
    uni: number;
    gastos?: gasto[];
    rutas?: cobrador_en_ruta[];
    creditos?: credito[];
    abonos?: abono[];
}