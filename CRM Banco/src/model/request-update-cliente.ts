import { Cliente } from "./cliente";
import { Transferencia } from "./transferencia";

export interface RequestUpdateCliente {
    cliente: Cliente;
    transferenciasHechas: Transferencia[];
    transferenciasRecibidas: Transferencia[];
}