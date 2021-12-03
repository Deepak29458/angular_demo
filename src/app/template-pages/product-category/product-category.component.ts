import { Component, OnInit } from '@angular/core';
import { allProducts } from 'src/app/shared/all-products';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {
  
  allProducts : any ;

  constructor() { }

  ngOnInit(): void {
    this.allProducts = allProducts ;
  }

 

}


