import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MainPageService {

  constructor(private http : HttpClient) { }

getProducts(){
  return this.http.get<any>("https://api.escuelajs.co/api/v1/products")
    .pipe(map((res:any)=>{
      return res;
    }))
}
}
