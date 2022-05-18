import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Gestor } from 'src/model/gestor';
import { GestoresService } from 'src/services/gestores/gestores.service';

@Component({
  selector: 'app-page-gestores-detail',
  templateUrl: './page-gestores-detail.component.html',
  styleUrls: ['./page-gestores-detail.component.scss']
})
export class PageGestoresDetailComponent implements OnInit {

  gestor$?: Observable<Gestor>;

  constructor(private route: ActivatedRoute, private gestoresService: GestoresService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.gestor$ = this.gestoresService.getGestor(id);
  }

}
