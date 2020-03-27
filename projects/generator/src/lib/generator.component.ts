import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gen-generator',
  template: `
    <div style="border:1px solid red;">
      generator library works! Pass variable from application to library.
      <h2>Hello {{ name }}~</h2>
    </div>
  `,
  styles: []
})
export class GeneratorComponent implements OnInit {
  constructor() {}

  @Input() name: string;

  ngOnInit(): void {}
}
