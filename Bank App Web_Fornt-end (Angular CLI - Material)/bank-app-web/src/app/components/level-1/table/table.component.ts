import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ManagersService } from 'src/services/managersServices/managers.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input()
  data: Observable<any[]> = of([]);
  @Input()
  path: string = "";
  list: any[] = [];
  keys: string[] = [];

  constructor(private router: Router, private gestoresService: ManagersService) { }

  ngOnInit(): void {
    this.data.subscribe(list => {
      this.list = list;
      if (list.length > 0) {
        this.keys = Object.keys(list[0]);
      }
    })
  }

  goTo(id: any) {
    this.router.navigate([this.path + id]);
  }

  onPressButton(id: any) {
      this.gestoresService.deleteManager(id).subscribe(response => {
        this.router.navigate(['/managers']);
      });
    }  
  
    
}
