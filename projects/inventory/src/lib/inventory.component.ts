import { Component, OnInit } from '@angular/core';
import * as moment_ from 'moment';

const moment = moment_;

@Component({
  selector: 'inv-inventory',
  template: `
    <h1>inventory library works! Today is {{ time }}.</h1>
  `,
  styles: []
})
export class InventoryComponent implements OnInit {
  constructor() {}

  time: string;

  ngOnInit(): void {
    this.time = moment().format('DD.MM.YYYY');
  }
}
