import {Component, OnDestroy, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {CatalogService} from "../../services/catalog.service";
import {map, Subscription} from "rxjs";
import {GetCategoriesResponse} from "../../models/catalog.models";
import {MainPageService} from "../../../main-page/services/main-page.service";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit, OnDestroy {
  allCategories$!: GetCategoriesResponse[]
  allCategoriesSubscribe!: Subscription
  categorySelected!:string

  constructor(
    private catalogService: CatalogService,
    private mainPageService:MainPageService
  ) {
  }

  ngOnInit() {
    this.allCategoriesSubscribe = this.catalogService
      .getCategories()
      .subscribe((categories: GetCategoriesResponse[]) => {
        (this.allCategories$ = categories)})
  }

  ngOnDestroy() {
    this.allCategoriesSubscribe.unsubscribe()
  }

  handlerSelectCategory($event:any ) {
    console.log($event.value.name)
    this.mainPageService.getProducts()
  }
}
