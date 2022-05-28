import { Client } from "./client";
import { Manager } from "./manager";


export interface RequestManager {
    manager: Manager;
    clients: Client[];
}