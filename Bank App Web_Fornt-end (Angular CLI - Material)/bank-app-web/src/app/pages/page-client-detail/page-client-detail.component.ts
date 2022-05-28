import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Client } from 'src/models/client';
import { ClientsService } from 'src/services/clientsServices/clients.service';

@Component({
  selector: 'app-page-client-detail',
  templateUrl: './page-client-detail.component.html',
  styleUrls: ['./page-client-detail.component.scss']
})
export class PageClientDetailComponent implements OnInit {

  client$?: Observable<Client>;

  constructor(private route: ActivatedRoute, private clientsService: ClientsService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.client$ = this.clientsService.getClient(id);
  }

}
