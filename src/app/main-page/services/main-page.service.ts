import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, map} from "rxjs";
import {environment} from "../../../environments/environment";
import {GetProductsResponse} from "../models/main-page.models";

@Injectable({
  providedIn: 'root'
})
export class MainPageService {
  products$ = new BehaviorSubject<GetProductsResponse[]>([])
  search = new BehaviorSubject<string>("");
  searchKey: string = "";

  constructor(private http: HttpClient) {
  }

  getProducts() {
    this.http
      .get<GetProductsResponse[]>(`${environment.baseUrl}products`)
      .subscribe((products: GetProductsResponse[]) => {
        this.products$.next(products)
      })
  }

  searchProduct() {
     this.search.subscribe((val: string) => {
       this.searchKey=val
       console.log(this.searchKey)
     })
    // this.searchKey = searchKey;
    this.products$
      .pipe(map((item) => this.searchKey.length === 0 ?
        item : item.map(el => el.title === this.searchKey ? el : el)))

      .subscribe((products: GetProductsResponse[]) => {
        this.products$.next(products)
      })
  // console.log(this.searchKey)
  }
}
