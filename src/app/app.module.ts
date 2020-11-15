import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonnagesComponent } from './personnages/personnages.component';
import { HaleluyaComponent } from './haleluya/haleluya.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonnagesComponent,
    HaleluyaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
