import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import {FormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";


@NgModule({
  declarations: [
    LoginComponent
  ],
  exports: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    DialogModule,

  ]
})
export class AuthModule { }
