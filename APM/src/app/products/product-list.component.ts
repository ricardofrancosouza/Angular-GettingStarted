import { Component } from "@angular/core";

@Component({
    selector:'pm-products',
    templateUrl:'./product-list.component.html'
})
export class ProductListComponent{
    pageTitle:string = 'Product Lists';
    products:any[]=[
        {
            "productId":2,
            "productName":"Garen Cart",
            "productCode":"GDN-0023",
            "releaseDate":"March 18, 2019",
            "description":"15 gallon capacity rolling garde",
            "price":32.99,
            "startRating":4.2,
            "imageUrl":"assets/images/garden_cart.png"
        },
        {
            "productId":5,
            "productName":"Hammer",
            "productCode":"TBX-0048",
            "releaseDate":"May 21, 2019",
            "description":"Curved claw steel hammer",
            "price":8.9,
            "startRating":4.8,
            "imageUrl":"assets/images/hammer.png"
        }


    ]
}