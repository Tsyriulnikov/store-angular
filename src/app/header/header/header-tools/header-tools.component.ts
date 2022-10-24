import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-tools',
  templateUrl: './header-tools.component.html',
  styleUrls: ['./header-tools.component.scss']
})
export class HeaderToolsComponent implements OnInit {
loginDisplayModal?:boolean
registerDisplayModal?:boolean
  constructor() { }

  ngOnInit(): void {
  }
  showModalDialogLogin() {
    this.loginDisplayModal = true;
  }
  showModalDialogRegister() {
  this.loginDisplayModal = false;
  this.registerDisplayModal = true;
}
}
