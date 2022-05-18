import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Travel } from 'src/model/travel';
import { TravelService } from 'src/services/travel/travel.service';

@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.scss'],
})
export class TravelListComponent implements OnInit {
  /* Esta propiedad es un Observable porque los datos
    no los tenemos al momento. 
    Un Observable es un tipo de dato que trabaja Asíncronamente.
    Los Observables para usarlos necesitamos decirle QUÉ TIPO DE DATO
    esperamos tener.
    El símbolo del dólar al final de una palabra, 
    se pone por convención para decir que este objeto será un Observable,
    no es obligatorio.
  */
  travelList$: Observable<Travel[]> = of([]);

  /*
  Para hacer llamadas al backend usamos servicios.
  Para usar un servicio en un componente tenemos que agregarlo (inyectarlo) en el constructor.
  Esto lo hace Angular por nosotros automáticamente, 
  solo tenemos que decirle qué servicio tiene que darnos.
  */
  constructor(private travelService: TravelService) {}

  /*
    Esta función se ejecuta al usar el componente desde otro componente.
    Sólo se ejecuta una vez y se llama automáticamente.
  */
  ngOnInit(): void {
    /*
    Aquí estamos asignando a la propiedad travelList$ lo que retorna 
    el servicio travelService en la función getTravelList()
    Si veis getTravelList encontraréis que retorna un Observable de tipo
    Travel[]. getTravelList(): Observable<Travel[]> {...}
    */
    this.travelList$ = this.travelService.getTravelList();
  }
}
