import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  products: ProductModel[] = [];
  p:ProductModel=new ProductModel();
  ngOnInit(): void {
    for (let i = 0; i < 100; i++) {
      this.p=new ProductModel();
      this.p.Name="Product "+i;
      this.p.Price=Math.random()*100;
      this.products.push(this.p);

    }
  }  
}
export class ProductModel {
  Name: string = "";
  Price: number = 0;
  Description: string;
  constructor() {
    this.Description = "Lorem Ipsum Desc"
  }

}