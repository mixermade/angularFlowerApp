import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlowerListMainComponent } from './flower-list-main/flower-list-main.component';
import { FlowerPageComponent } from './flower-page/flower-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FlowerListMainComponent,
    FlowerPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
