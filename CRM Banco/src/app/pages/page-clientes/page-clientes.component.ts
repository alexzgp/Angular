import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Cliente } from 'src/model/cliente';
import { ClientesService } from 'src/services/clientes/clientes.service';

@Component({
  selector: 'app-page-clientes',
  templateUrl: './page-clientes.component.html',
  styleUrls: ['./page-clientes.component.scss']
})
export class PageClientesComponent implements OnInit {

  clientesList$: Observable<Cliente[]> = of([]);

  constructor(private router: Router, private clientesService: ClientesService) { }


  ngOnInit(): void {
    this.clientesList$ = this.clientesService.getListaClientes();
  }

  goTo(path: string) {
    console.log(path);
    this.router.navigate([path]);
  }
}
