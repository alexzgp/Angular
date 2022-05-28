import { Timestamp, TimestampProvider } from "rxjs";

export interface Wire {
    id?: number;
    id_origen: number;
    id_destino: number;
    fecha: TimestampProvider;
    concepto: string;
    importe: number;
}