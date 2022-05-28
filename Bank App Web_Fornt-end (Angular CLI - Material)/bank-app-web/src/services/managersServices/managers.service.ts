import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Manager } from 'src/models/manager';
import { RequestManager } from 'src/models/requestManager';
import { api } from '../api';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root'
})


export class ManagersService {

  constructor(private http: HttpClient) { }

  getManager(id: number): Observable<Manager> {
    return this.http.get<Manager>(api.gestores + "/" + id);
  }

  getManagers(): Observable<Manager[]> {
    return this.http.get<Manager[]>(api.gestores);
  }

  insertManager(manager: Manager): Observable<Manager> {
    return this.http.post<Manager>(api.gestores, manager, httpOptions);
  }

  updateManager(manager: Manager): Observable<Manager> {
    return this.http.put<Manager>(api.gestores + '/' + manager.id, manager, httpOptions);
  } 
  
  
  // Con los clientes incluidos

  // updateManager(requestManager: RequestManager): Observable<Manager> {
  //   return this.http.put<Manager>(api.gestores + '/' + requestManager.manager.id, requestManager, httpOptions);
  // }

  deleteManager(id: number): Observable<Manager> {
    return this.http.delete<Manager>(api.gestores + "/" + id);
  }
}
