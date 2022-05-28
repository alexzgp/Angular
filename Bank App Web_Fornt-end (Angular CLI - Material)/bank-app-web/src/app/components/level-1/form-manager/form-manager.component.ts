import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Manager } from 'src/models/manager';
import { ManagersService } from 'src/services/managersServices/managers.service';

@Component({
  selector: 'app-form-manager',
  templateUrl: './form-manager.component.html',
  styleUrls: ['./form-manager.component.scss']
})
export class FormManagerComponent implements OnInit {

  @Input()
  manager: Manager = { usuario: "", password: "", correo: "" };

  constructor(private route: Router, private managersService: ManagersService) { }

  ngOnInit(): void {
  }

  onPressButton() {
    if (this.manager.id) {
      this.managersService.updateManager(this.manager).subscribe(response => {
        this.route.navigate(['/managers']);
      });
    } else {
      this.managersService.insertManager(this.manager).subscribe(response => {
        this.route.navigate(['/managers']);
      });
    }   
  }
}
