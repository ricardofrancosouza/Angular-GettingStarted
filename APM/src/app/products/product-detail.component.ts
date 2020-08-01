import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { IProduct } from './product';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle:string ='Product Detail'
  product:IProduct;
  constructor( private route:ActivatedRoute) { }

  ngOnInit(): void {
    //coleta o parametro id da url. Usamos o +this para converter em uma sequencia numérica
    let id= +this.route.snapshot.paramMap.get('id');
    this.product={
      "productId": 1,
    "productName": "Leaf Rake",
    "productCode": "GDN-0011",
    "releaseDate": "March 19, 2019",
    "description": "Leaf rake with 48-inch wooden handle.",
    "price": 19.95,
    "starRating": 3.2,
    "imageUrl": "assets/images/leaf_rake.png"
    }
  }

}
