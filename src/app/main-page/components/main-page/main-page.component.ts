import {Component, OnDestroy, OnInit} from '@angular/core';
import {MainPageService} from "../../services/main-page.service";
import {GetProductsResponse} from "../../models/main-page.models";
import {filter, map, Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, OnDestroy {
  allProducts$!: GetProductsResponse[]
  searchKey: string = "";
  allProductsSubscribe!: Subscription

  constructor(private mainPageService: MainPageService) {
  }

  ngOnInit(): void {
    this.allProductsSubscribe = this.mainPageService
      .getProducts()
      .subscribe((products: GetProductsResponse[]) => (this.allProducts$ = products))
    this.mainPageService.search.subscribe((val: string) => {
      this.searchKey = val;
    })

  }

  ngOnDestroy() {
    this.allProductsSubscribe.unsubscribe()
  }
}
