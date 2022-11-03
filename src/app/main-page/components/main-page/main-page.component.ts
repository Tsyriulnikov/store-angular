import {Component, OnInit} from '@angular/core';
import {MainPageService} from "../../services/main-page.service";
import {GetProductsResponse} from "../../models/main-page.models";
import {filter, map, Observable} from "rxjs";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  allProducts$!: Observable<GetProductsResponse[]>
  searchKey:string ="";

  constructor(private mainPageService: MainPageService) {
  }

  ngOnInit(): void {
    // this.mainPageService.search.subscribe((val:string)=>{
    //   this.searchKey = val;
    // })
    this.allProducts$=this.mainPageService.products$
    this.mainPageService.getProducts()
  }

}
