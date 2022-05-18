import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  validar:string = "VALIDAR";
  pagar:string = "PAGAR";
  cobrar:string = "COBRAR";

  constructor() { }

  ngOnInit(): void {
  }

}
