import {Component, OnDestroy, OnInit} from '@angular/core';
import {MainPageService} from "../../services/main-page.service";
import {GetProductsResponse} from "../../models/main-page.models";
import {merge, Subscription} from "rxjs";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, OnDestroy {
  currentProducts!: GetProductsResponse[]
  searchKey: string = "";
  currentProductsSubscribe!: Subscription

  constructor(private mainPageService: MainPageService) {
  }

  ngOnInit(): void {
    this.mainPageService.getProducts()

    this.mainPageService.search.subscribe((val: string) => {
      this.searchKey = val;
    })

    this.mainPageService.category$
      .subscribe((idCategory: string) => {
        !!idCategory &&
        this.mainPageService.getProductsByCategory(idCategory)
      })

    this.currentProductsSubscribe = merge(this.mainPageService.allProducts$, this.mainPageService.categoryProducts$)
      .subscribe((products: GetProductsResponse[]) => this.currentProducts = products)
  }

  ngOnDestroy() {
    this.currentProductsSubscribe.unsubscribe()
  }
}
