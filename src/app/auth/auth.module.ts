import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";


@NgModule({
  declarations: [
  ],
  exports: [

  ],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    DialogModule,

  ]
})
export class AuthModule { }
