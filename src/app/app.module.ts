import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlogLibModule } from "blog-lib";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BlogLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
