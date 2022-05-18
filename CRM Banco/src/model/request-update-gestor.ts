import { Cliente } from "./cliente";
import { Gestor } from "./gestor";


export interface RequestUpdateGestor {
    gestor: Gestor;
    clientes: Cliente[];
}