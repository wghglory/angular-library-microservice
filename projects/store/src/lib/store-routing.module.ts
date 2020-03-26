import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StoreComponent } from './store.component';

import { BookListComponent } from './book-list/book-list.component';
import { CdListComponent } from './cd-list/cd-list.component';
import { DvdListComponent } from './dvd-list/dvd-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'store',
    component: StoreComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'book-list', component: BookListComponent },
      { path: 'cd-list', component: CdListComponent },
      { path: 'dvd-list', component: DvdListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule {}
