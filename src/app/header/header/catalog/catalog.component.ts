import {Component, OnDestroy, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {CatalogService} from "../../services/catalog.service";
import {map, Subscription} from "rxjs";
import {GetCategoriesResponse} from "../../models/catalog.models";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit, OnDestroy {
  allCategories$!: GetCategoriesResponse[]
  allCategoriesSubscribe!: Subscription
  items!: MenuItem[];
categories!:Array<any>

  constructor(private catalogService: CatalogService) {
  }

  ngOnInit() {
    this.allCategoriesSubscribe = this.catalogService
      .getCategories()
      .subscribe((categories: GetCategoriesResponse[]) => {
        (this.allCategories$ = categories)
for (const el of categories ) {
  this.items.push({label: el.name, icon: 'pi pi-refresh'})
  // this.items = [
  //   {label: categories[0].name, icon: 'pi pi-refresh'},
  //   {label: 'Delete', icon: 'pi pi-times'},
    // {label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io'},
    // {separator: true},
    // {label: 'Setup', icon: 'pi pi-cog', routerLink: ['/setup']}
  // ];
}
})

  }

  ngOnDestroy() {
    this.allCategoriesSubscribe.unsubscribe()
  }
}
