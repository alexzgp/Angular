import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Gestor } from 'src/model/gestor';
import { GestoresService } from 'src/services/gestores/gestores.service';

@Component({
  selector: 'app-form-gestor',
  templateUrl: './form-gestor.component.html',
  styleUrls: ['./form-gestor.component.scss']
})
export class FormGestorComponent implements OnInit {

  @Input()
  gestor: Gestor = { usuario: "", password: "", correo: "" };

  constructor(private route: Router, private gestoresService: GestoresService) { }

  ngOnInit(): void {}

  onPressButton() {
    if (this.gestor.id) {
      this.gestoresService.updateGestor({gestor: this.gestor, clientes: []}).subscribe(response => {
        this.route.navigate(['/gestores']);
      });
    } else {
      this.gestoresService.insertGestor(this.gestor).subscribe(response => {
        this.route.navigate(['/gestores']);
      });
    }   
  }

}
