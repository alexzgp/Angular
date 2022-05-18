import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Travel } from 'src/model/travel';

const apiTravel = 'http://localhost:3000/travel';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class TravelService {
  travelList: Travel[] = [];

  constructor(private http: HttpClient) {}

  getTravelList(): Observable<Travel[]> {
    console.log(environment.domain);
    return this.http.get<Travel[]>(apiTravel);
  }

  addTravel(travel: Travel): Observable<Travel> {
    return this.http.post<Travel>(apiTravel, travel, httpOptions).pipe(
      catchError((error) => {
        console.log(error);
        return of(error);
      })
    );
  }
}






