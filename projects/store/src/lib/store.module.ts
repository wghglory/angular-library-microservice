import { NgModule } from '@angular/core';

import { StoreRoutingModule } from './store-routing.module';

import { StoreComponent } from './store.component';
import { HomeComponent } from './home/home.component';
import { BookListComponent } from './book-list/book-list.component';
import { CdListComponent } from './cd-list/cd-list.component';
import { DvdListComponent } from './dvd-list/dvd-list.component';

@NgModule({
  declarations: [
    StoreComponent,
    HomeComponent,
    BookListComponent,
    CdListComponent,
    DvdListComponent
  ],
  imports: [StoreRoutingModule],
  exports: [StoreComponent]
})
export class StoreModule {}
