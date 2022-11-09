import {Component, OnDestroy, OnInit} from '@angular/core';
import {MainPageService} from "../../services/main-page.service";
import {GetProductsResponse} from "../../models/main-page.models";
import {filter, map, merge, Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, OnDestroy {
  currentProducts!: GetProductsResponse[]
  searchKey: string = "";
  allProductsSubscribe!: Subscription

  currentProducts$!: Observable<GetProductsResponse[]>
  allProducts$!: Observable<GetProductsResponse[]>
  categoryProducts$!: Observable<GetProductsResponse[]>


  constructor(private mainPageService: MainPageService) {
  }

  ngOnInit(): void {
    // this.allProductsSubscribe = this.mainPageService
    //   .getProducts()
    //   .subscribe((products: GetProductsResponse[]) => (this.allProducts$ = products))
    //
    // this.mainPageService.search.subscribe((val: string) => {
    //   this.searchKey = val;
    // })

    // this.mainPageService.category$
    //            .subscribe((cat: string) => {
    //            console.log(cat)
    //           this.mainPageService
    //             .getProductsByCategory()
    //             .subscribe((products: GetProductsResponse[]) => (this.allProducts$ = products))
    //            })

    this.allProducts$ = this.mainPageService.getProducts()
    this.categoryProducts$ = this.mainPageService.getProductsByCategory()
    this.allProducts$ = merge(this.allProducts$, this.categoryProducts$)
    this.allProducts$.subscribe(products => this.currentProducts = products)


  }

  ngOnDestroy() {
    this.allProductsSubscribe.unsubscribe()
  }
}
