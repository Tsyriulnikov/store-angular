import {Component, OnDestroy, OnInit} from '@angular/core';
import {MainPageService} from "../../services/main-page.service";
import {GetProductsResponse} from "../../models/main-page.models";
import {merge, Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, OnDestroy {
  currentProducts!: GetProductsResponse[]
  searchKey: string = "";
  allProductsSubscribe!: Subscription

  allProducts$!: Observable<GetProductsResponse[]>
  categoryProducts$!: Observable<GetProductsResponse[]>


  constructor(private mainPageService: MainPageService) {
  }

  ngOnInit(): void {
    this.allProducts$ = this.mainPageService.allProducts$
    this.categoryProducts$ = this.mainPageService.categoryProducts$
    this.mainPageService.getProducts()

    this.mainPageService.search.subscribe((val: string) => {
      this.searchKey = val;
    })

    this.mainPageService.category$
      .subscribe((idCategory: string) => {
        !!idCategory &&
        this.mainPageService.getProductsByCategory(idCategory)
      })

    this.allProducts$ = merge(this.allProducts$, this.categoryProducts$)
   this.allProductsSubscribe =  this.allProducts$.subscribe(products => this.currentProducts = products)


  }

  ngOnDestroy() {
    this.allProductsSubscribe.unsubscribe()
  }
}
