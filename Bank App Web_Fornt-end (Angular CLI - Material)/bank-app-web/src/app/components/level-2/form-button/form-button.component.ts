import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-form-button',
  templateUrl: './form-button.component.html',
  styleUrls: ['./form-button.component.scss']
})
export class FormButtonComponent implements OnInit {

  @Input() textButton: string = "";
  @Output() onPressMyButton = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
		this.onPressMyButton.emit();
	}
}
