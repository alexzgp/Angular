import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Gestor } from 'src/model/gestor';
import { Product } from 'src/model/product';
import { RequestUpdateGestor } from 'src/model/request-update-gestor';
import { api } from '../api';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root'
})

export class GestoresService {

  constructor(private http: HttpClient) { }

  getGestor(id: number): Observable<Gestor> {
    return this.http.get<Gestor>(api.gestores + "/" + id);
  }

  getListaGestores(): Observable<Gestor[]> {
    return this.http.get<Gestor[]>(api.gestores);
  }

  insertGestor(gestor: Gestor): Observable<Gestor> {
    return this.http.post<Gestor>(api.gestores, gestor, httpOptions);
  }

  updateGestor(requestUpdateGestor: RequestUpdateGestor): Observable<Gestor> {
    return this.http.put<Gestor>(api.gestores, requestUpdateGestor, httpOptions);
  }

}
