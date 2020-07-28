import { Component, OnInit } from "@angular/core";
import { IProduct } from './product';

@Component({
    selector:'pm-products',
    templateUrl:'./product-list.component.html',
    styleUrls:['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
    pageTitle:string = 'Product Lists';
    showImage:boolean = false;
    imageWidth:number = 50;
    imageMargin:number = 2;
    listFilter:string = 'cart';
    
    products:IProduct[]=[
        {
            "productId":2,
            "productName":"Garen Cart",
            "productCode":"GDN-0023",
            "releaseDate":"March 18, 2019",
            "description":"15 gallon capacity rolling garde",
            "price":32.99,
            "starRating":4.2,
            "imageUrl":"assets/images/garden_cart.png"
        },
        {
            "productId":5,
            "productName":"Hammer",
            "productCode":"TBX-0048",
            "releaseDate":"May 21, 2019",
            "description":"Curved claw steel hammer",
            "price":8.9,
            "starRating":4.8,
            "imageUrl":"assets/images/hammer.png"
        }
        
        
    ]
            ngOnInit(): void {
                console.log("Method not implemented.");
            }

    toggleImage():void{
        this.showImage = !this.showImage;
    }
}