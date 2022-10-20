import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  displayModal?: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  showModalDialog() {
    this.displayModal = true;
  }
}
