import { Component, OnInit } from '@angular/core';
import {OwlOptions, } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    autoplayHoverPause: false,

    nav: true,
    navText: [ '<i class=\'fa fa-long-arrow-left\'></i>', '<i class=\'fa fa-long-arrow-right\'></i>' ],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 4
      },
      940: {
        items: 4
      }
    },

  }

  customOptionsTwo: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    autoplayHoverPause: false,

    nav: true,
    navText: [ '<i class=\'fa fa-long-arrow-left\'></i>', '<i class=\'fa fa-long-arrow-right\'></i>' ],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 4
      },
      940: {
        items: 6
      }
    },

  }

  banner:any = [
    {
      imgUrl :'../../../assets/briyani.jpeg',
      alt: 'offer-2',
      imgName: 'Briyani',
      price : '€19.99',
    },

    {
      imgUrl : '../../../assets/chicken.jpg',
      alt: 'offer-3',
      imgName: 'Chicken',
      price : '€19.99',
    },
    {
      imgUrl : '../../../assets/pizza.jpg',
      alt: 'offer-4',
      imgName: 'Pizza',
      price : '€19.99',
    },
    {
      imgUrl :'../../../assets/parrota.jpg',
      alt: 'offer-2',
      imgName: 'Parrota',
      price : '€19.99',
    },
    {
      imgUrl :'../../../assets/briyani.jpeg',
      alt: 'offer-2',
      imgName: 'Briyani',
      price : '€19.99',
    },

    {
      imgUrl : '../../../assets/chicken.jpg',
      alt: 'offer-3',
      imgName: 'Chicken',
      price : '€19.99',
    },
    {
      imgUrl : '../../../assets/pizza.jpg',
      alt: 'offer-4',
      imgName: 'Pizza',
      price : '€19.99',
    },
    {
      imgUrl :'../../../assets/parrota.jpg',
      alt: 'offer-2',
      imgName: 'Parrota',
      price : '€19.99',
    },
  ]

  bannerTwo:any = [
    {
      imgUrl :'../../../assets/KFC_logo.png',
      alt: 'offer-2',
      imgName: '40Min',
      price : '€19.99',
    },

    {
      imgUrl : '../../../assets/dtp.jpg',
      alt: 'offer-3',
      imgName: '35Min',
      price : '€19.99',
    },
    {
      imgUrl : '../../../assets/anju.png',
      alt: 'offer-4',
      imgName: '58Min',
      price : '€19.99',
    },
    {
      imgUrl :'../../../assets/download.png',
      alt: 'offer-2',
      imgName: '44 Min',
      price : '€19.99',
    },
    {
      imgUrl :'../../../assets/download (1).png',
      alt: 'offer-2',
      imgName: '30Min',
      price : '€19.99',
    },
    {
      imgUrl :'../../../assets/ss.webp',
      alt: 'offer-2',
      imgName: '43MIn',
      price : '€19.99',
    },
    {
      imgUrl :'../../../assets/KFC_logo.png',
      alt: 'offer-2',
      imgName: '40Min',
      price : '€19.99',
    },

    {
      imgUrl : '../../../assets/dtp.jpg',
      alt: 'offer-3',
      imgName: '35Min',
      price : '€19.99',
    },
    {
      imgUrl : '../../../assets/anju.png',
      alt: 'offer-4',
      imgName: '58Min',
      price : '€19.99',
    },
    {
      imgUrl :'../../../assets/download.png',
      alt: 'offer-2',
      imgName: '44 Min',
      price : '€19.99',
    },
    {
      imgUrl :'../../../assets/download (1).png',
      alt: 'offer-2',
      imgName: '30Min',
      price : '€19.99',
    },
    {
      imgUrl :'../../../assets/ss.webp',
      alt: 'offer-2',
      imgName: '43MIn',
      price : '€19.99',
    },
  ]

  productList:any = [
    {
      imgUrl :'../../../assets/dosa.jpg',
      alt: 'offer-2',
      imgName: 'Hotel saravana bavan',
      subTitle : 'North Indian, chinesh, South indian',
      rating:3.8,
      orders:7300,
      offer:200
    },
    {
      imgUrl :'../../../assets/download.jpeg',
      alt: 'offer-2',
      imgName: 'Briyani',
      subTitle : 'North Indian, chinesh, South indian',
      rating:3.8,
      orders:8300,
      offer:200
    },
    {
      imgUrl :'../../../assets/briyani.jpeg',
      alt: 'offer-2',
      imgName: 'Briyani',
     subTitle : 'North Indian, chinesh, South indian',
     rating:3.8,
     orders:7100,
     offer:200
    },

    {
      imgUrl : '../../../assets/chicken.jpg',
      alt: 'offer-3',
      imgName: 'Chicken',
     subTitle : 'North Indian, chinesh, South indian',
     rating:4.8,
     orders:5300,
         offer:200
    },
    {
      imgUrl : '../../../assets/pizza.jpg',
      alt: 'offer-4',
      imgName: 'Pizza',
     subTitle : 'North Indian, chinesh, South indian',
     rating:3.8,
     offer:200,
     orders:7000,
    },
    {
      imgUrl :'../../../assets/parrota.jpg',
      alt: 'offer-2',
      imgName: 'Parrota',
     subTitle : 'North Indian, chinesh, South indian',
     rating:3.8,
     offer:200
    },
    {
      imgUrl :'../../../assets/dosa.jpg',
      alt: 'offer-2',
      imgName: 'Hotel saravana bavan',
     subTitle : 'North Indian, chinesh, South indian',
     rating:3.8,
    offer:200
    },
    {
      imgUrl :'../../../assets/download.jpeg',
      alt: 'offer-2',
      imgName: 'Briyani',
     subTitle : 'North Indian, chinesh, South indian',
     rating:3.8,
     orders:7300,
     offer:200
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
