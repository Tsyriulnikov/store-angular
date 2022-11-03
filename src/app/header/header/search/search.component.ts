import { Component, OnInit } from '@angular/core';
import {MainPageService} from "../../../main-page/services/main-page.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public searchTerm !: string;
  constructor(private mainPageService:MainPageService) { }

  ngOnInit(): void {}
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value
    this.mainPageService.search.next(this.searchTerm)
    this.mainPageService.searchProduct(this.searchTerm)
  }

}
