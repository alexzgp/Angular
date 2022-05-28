import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Client } from 'src/models/client';
import { ClientsService } from 'src/services/clientsServices/clients.service';

@Component({
  selector: 'app-page-clients',
  templateUrl: './page-clients.component.html',
  styleUrls: ['./page-clients.component.scss']
})
export class PageClientsComponent implements OnInit {
 
  title: String = `Clients`

  clientsList$: Observable<Client[]> = of([]);

  constructor(private router: Router, private clientsService: ClientsService) { }

  ngOnInit(): void {
    this.clientsList$ = this.clientsService.getClients();
  }
  

  goTo(path: string) {
    console.log(path);
    this.router.navigate([path]);
  }
}
