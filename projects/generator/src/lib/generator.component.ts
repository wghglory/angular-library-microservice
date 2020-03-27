import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gen-generator',
  template: `
    <p style="border:1px solid red;">
      generator library works!
    </p>
  `,
  styles: []
})
export class GeneratorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
