import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/model/cliente';
import { UpdateCliente } from 'src/model/update-cliente';
import { ClientesService } from 'src/services/clientes/clientes.service';

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.scss']
})
export class FormClienteComponent implements OnInit {

  @Input()
  cliente: Cliente = { id_gestor: 0, usuario: "", password: "", correo: "", saldo: 0};

  constructor(private route: Router, private clientesService: ClientesService) { }

  ngOnInit(): void {
  }

  // onPressButton() {
  //   if (this.cliente.id) {
  //     this.clientesService.updateCliente({cliente: this.cliente, transferenciasHechas: []}).subscribe(response => {
  //       this.route.navigate(['/clientes']);
  //     });
  //   } else {
  //     this.clientesService.insertCliente(this.cliente).subscribe(response => {
  //       this.route.navigate(['/clientes']);
  //     });
  //   }   
  // }
}
