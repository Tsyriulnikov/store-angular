import {Component, Input, OnInit} from '@angular/core';
import {GetProductsResponse} from "../../../../main-page/models/main-page.models";

@Component({
  selector: 'app-image-gallary',
  templateUrl: './image-gallary.component.html',
  styleUrls: ['./image-gallary.component.scss']
})
export class ImageGallaryComponent implements OnInit {
  @Input() images!:any[]
  galleriaResponsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '960px',
      numVisible: 4
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
