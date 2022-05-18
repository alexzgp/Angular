import { Component, Input, OnInit } from '@angular/core';
import { Travel } from 'src/model/travel';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() travel?: Travel;

  constructor() {}

  ngOnInit(): void {}
}
