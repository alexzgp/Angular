import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/models/client';
import { api } from '../api';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http: HttpClient) { }

  getClient(id: number): Observable<Client> {
    return this.http.get<Client>(api.clients + "/" + id);
  }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(api.clients);
  }

  insertClient(client: Client): Observable<Client> {
    return this.http.post<Client>(api.clients, client, httpOptions);
  }
  
  updateClient(client: Client): Observable<Client> {
    return this.http.put<Client>(api.clients + '/' + client.id, client, httpOptions);
  }
}
