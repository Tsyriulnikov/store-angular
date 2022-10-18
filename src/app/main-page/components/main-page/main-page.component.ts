import {Component, OnInit} from '@angular/core';
import {MainPageService} from "../../sercices/main-page.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  products: any = []

  constructor(private mainPageService: MainPageService) {
  }

  ngOnInit(): void {
    this.mainPageService.getProducts()
      .subscribe(res => {
        this.products = res;
      })

  }

}
