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
  public search = new BehaviorSubject<string>("");
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

  searchProduct(searchKey:string) {
     this.search.subscribe((val: string) => {
       this.search.next(val)
     })
    // this.searchKey = searchKey;
    this.products$
      .pipe(map((item) => this.search.getValue().length === 0 ?
        item : item.filter(el => el.title === this.search.getValue())))

      .subscribe((products: GetProductsResponse[]) => {
        this.products$.next(products)
      })
  // console.log(this.searchKey)
  }
}
