import { Component, OnInit } from '@angular/core';
import { Gestor } from 'src/model/gestor';

@Component({
  selector: 'app-page-gestores-create',
  templateUrl: './page-gestores-create.component.html',
  styleUrls: ['./page-gestores-create.component.scss']
})
export class PageGestoresCreateComponent implements OnInit {

  gestor: Gestor = { usuario: "", password: "", correo: "" };

  constructor() { }

  ngOnInit(): void {
  }

}
