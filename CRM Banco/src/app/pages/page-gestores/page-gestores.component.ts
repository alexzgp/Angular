import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Gestor } from 'src/model/gestor';
import { GestoresService } from 'src/services/gestores/gestores.service';

@Component({
  selector: 'app-page-gestores',
  templateUrl: './page-gestores.component.html',
  styleUrls: ['./page-gestores.component.scss']
})
export class PageGestoresComponent implements OnInit {

  gestoresList$: Observable<Gestor[]> = of([]);

  constructor(private router: Router, private gestoresService: GestoresService) { }

  ngOnInit(): void {
    this.gestoresList$ = this.gestoresService.getListaGestores();
  }

  goTo(path: string) {
    console.log(path);
    this.router.navigate([path]);
  }

}
