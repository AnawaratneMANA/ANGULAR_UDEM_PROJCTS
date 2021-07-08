import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, // replace with formsModule, this is need for template Driven Approach.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
