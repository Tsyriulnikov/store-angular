import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-tools',
  templateUrl: './header-tools.component.html',
  styleUrls: ['./header-tools.component.scss']
})
export class HeaderToolsComponent implements OnInit {
displayModal?:boolean
  constructor() { }

  ngOnInit(): void {
  }
  showModalDialog() {
    this.displayModal = true;
  }
}
