import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {LayOutModule} from './lay-out/lay-out.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,LayOutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
