import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderModule} from "./header/header.module";
// import {ButtonModule} from "primeng/button";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    // ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
