import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TranstionsListComponent } from './transtions-list/transtions-list.component';
import { TranstionDetailComponent } from './transtion-detail/transtion-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    TranstionsListComponent,
    TranstionDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
