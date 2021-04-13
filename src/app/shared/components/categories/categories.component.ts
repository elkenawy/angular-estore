import { Component, OnInit } from '@angular/core';
import { Product } from '../../classes/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  public products: Product[] = [];
  public collapse = true;

  constructor(public productService: ProductService) {
    this.productService.getProducts.subscribe(product => this.products = product);
  }

  ngOnInit(): void {
  }

  get category() {
    const cat = this.products.map(product => product.category)
    const category = cat.concat.apply([], cat)
    return category;
  }


   get filterbyCategory() {
    const uniqueCategory = [];
    const category=this.category.filter((value, index, self) =>{
      if(self.indexOf(value) === index) {
        uniqueCategory.push(value)
      }
      
      });

    return uniqueCategory;
    }
  }

