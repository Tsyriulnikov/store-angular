import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import {FormsModule} from "@angular/forms";
import {PasswordModule} from "primeng/password";
import {CheckboxModule} from "primeng/checkbox";


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
    PasswordModule,
    CheckboxModule,
  ]
})
export class AuthModule { }
