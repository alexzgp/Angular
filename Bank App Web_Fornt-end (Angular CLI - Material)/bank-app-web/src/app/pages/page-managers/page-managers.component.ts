import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Manager } from 'src/models/manager';
import { ManagersService } from 'src/services/managersServices/managers.service';

@Component({
  selector: 'app-page-managers',
  templateUrl: './page-managers.component.html',
  styleUrls: ['./page-managers.component.scss']
})
export class PageManagersComponent implements OnInit {

  title: String = `Managers`

  managersList$: Observable<Manager[]> = of([]);

  constructor(private router: Router, private managersService: ManagersService) { }

  ngOnInit(): void {
    this.managersList$ = this.managersService.getManagers();
  }
  

  goTo(path: string) {
    console.log(path);
    this.router.navigate([path]);
  }

}
