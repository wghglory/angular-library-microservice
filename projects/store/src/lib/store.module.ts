import { NgModule } from '@angular/core';
import { StoreComponent } from './store.component';
import { HomeComponent } from './home/home.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { CdListComponent } from './cd-list/cd-list.component';
import { CdDetailComponent } from './cd-detail/cd-detail.component';
import { DvdListComponent } from './dvd-list/dvd-list.component';
import { DvdDetailComponent } from './dvd-detail/dvd-detail.component';

@NgModule({
  declarations: [
    StoreComponent,
    HomeComponent,
    BookListComponent,
    BookDetailComponent,
    CdListComponent,
    CdDetailComponent,
    DvdListComponent,
    DvdDetailComponent
  ],
  imports: [],
  exports: [StoreComponent]
})
export class StoreModule {}
