import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  items!: MenuItem[];

  constructor() {
  }

  ngOnInit() {
    this.items = [
      {label: 'Add', icon: 'pi pi-refresh'},
      {label: 'Delete', icon: 'pi pi-times'},
      // {label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io'},
      // {separator: true},
      // {label: 'Setup', icon: 'pi pi-cog', routerLink: ['/setup']}
    ];
  }
}
