import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'str-store',
  template: `
    <nav class="subnav">
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link" routerLinkActive="active" routerLink="home"
            >Home
          </a>
          <a
            class="nav-link"
            routerLinkActive="active"
            [routerLink]="['book-list']"
            >Books
          </a>
          <a
            class="nav-link"
            routerLinkActive="active"
            [routerLink]="['cd-list']"
            >CDs
          </a>
          <a
            class="nav-link"
            routerLinkActive="active"
            [routerLink]="['dvd-list']"
            >DVDs
          </a>
        </li>
      </ul>
    </nav>

    <router-outlet></router-outlet>
  `,
  styles: [
    `
      .nav-link {
        margin-right: 1rem;
      }
    `
  ]
})
export class StoreComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
