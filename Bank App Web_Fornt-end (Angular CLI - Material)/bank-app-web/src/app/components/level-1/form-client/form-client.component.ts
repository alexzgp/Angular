import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/models/client';
import { ClientsService } from 'src/services/clientsServices/clients.service';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss']
})
export class FormClientComponent implements OnInit {

  @Input()
  client: Client = { id_gestor: 0, usuario: "", password: "", correo: "", saldo: 0};

  constructor(private route: Router, private clientsService: ClientsService) { }

  ngOnInit(): void {
  }

  onPressButton() {
    if (this.client.id) {
      this.clientsService.updateClient(this.client).subscribe(response => {
        this.route.navigate(['/clients']);
      });
    } else {
      this.clientsService.insertClient(this.client).subscribe(response => {
        this.route.navigate(['/clients']);
      });
    }   
  }
}
