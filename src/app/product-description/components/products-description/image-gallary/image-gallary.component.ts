import {Component, Input, OnInit} from '@angular/core';
import {ViewEncapsulation, ViewChild } from "@angular/core";
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";
import {GetProductsResponse} from "../../../../main-page/models/main-page.models";

// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs]);


@Component({
  selector: 'app-image-gallary',
  templateUrl: './image-gallary.component.html',
  styleUrls: ['./image-gallary.component.scss'],
  encapsulation: ViewEncapsulation.None,
  })
export class ImageGallaryComponent implements OnInit {
  @Input() images!:string[]

  thumbsSwiper: any;
  constructor() {

  }

  ngOnInit(): void {
  }

}
