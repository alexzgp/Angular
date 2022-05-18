import { Timestamp, TimestampProvider } from "rxjs";

export interface Transferencia {
    id?: number;
    id_origen: number;
    id_destino: number;
    fecha: TimestampProvider;
    concepto: string;
    importe: number;
}