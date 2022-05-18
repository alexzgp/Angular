import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from 'src/model/cliente';
import { RequestUpdateCliente } from 'src/model/request-update-cliente';
import { api } from '../api';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root'
})

export class ClientesService {

  constructor(private http: HttpClient) { }

  getCliente(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(api.clientes + "/" + id);
  }

  getListaClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(api.clientes);
  }

  insertCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(api.clientes, cliente, httpOptions);
  }
  
  updateCliente(requestUpdateCliente : RequestUpdateCliente): Observable<Cliente> {
    return this.http.put<Cliente>(api.clientes, requestUpdateCliente, httpOptions);
  }
}
