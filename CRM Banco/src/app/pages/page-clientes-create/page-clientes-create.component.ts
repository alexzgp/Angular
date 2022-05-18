import { Component, OnInit } from '@angular/core';
import { UpdateCliente } from 'src/model/update-cliente';

@Component({
  selector: 'app-page-clientes-create',
  templateUrl: './page-clientes-create.component.html',
  styleUrls: ['./page-clientes-create.component.scss']
})
export class PageClientesCreateComponent implements OnInit {

  cliente: UpdateCliente = { gestor: {}, usuario: "", password: "", correo: "" };

  constructor() { }

  ngOnInit(): void {
  }

}
