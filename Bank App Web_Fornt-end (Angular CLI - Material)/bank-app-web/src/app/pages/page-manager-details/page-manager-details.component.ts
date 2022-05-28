import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Manager } from 'src/models/manager';
import { ManagersService } from 'src/services/managersServices/managers.service';

@Component({
  selector: 'app-page-manager-details',
  templateUrl: './page-manager-details.component.html',
  styleUrls: ['./page-manager-details.component.scss']
})
export class PageManagerDetailsComponent implements OnInit {

  manager$?: Observable<Manager>;

  constructor(private route: ActivatedRoute, private managersService: ManagersService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.manager$ = this.managersService.getManager(id);
  }

}
