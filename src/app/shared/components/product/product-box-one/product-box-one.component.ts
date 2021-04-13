import { Component, OnInit, Input, ViewChild, Inject } from '@angular/core';
import { QuickViewComponent } from "../../modal/quick-view/quick-view.component";
import { CartModalComponent } from "../../modal/cart-modal/cart-modal.component";
import { Product } from "../../../classes/product";
import { ProductService } from "../../../services/product.service";
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-product-box-one',
  templateUrl: './product-box-one.component.html',
  styleUrls: ['./product-box-one.component.scss']
})
export class ProductBoxOneComponent implements OnInit {

  @Input() product: Product;
  @Input() currency: any = this.productService.Currency; // Default Currency 
  @Input() thumbnail: boolean = false; // Default False 
  @Input() onHowerChangeImage: boolean = false; // Default False
  @Input() cartModal: boolean = false; // Default False
  @Input() loader: boolean = false;
  
  @ViewChild("quickView") QuickView: QuickViewComponent;
  @ViewChild("cartModal") CartModal: CartModalComponent;

  public ImageSrc : string
  public API = 'http://localhost:8000/'
  window: Window & typeof globalThis;

  constructor(private productService: ProductService, @Inject(DOCUMENT) private document: Document) {
    this.window = this.document.defaultView;
  }

  ngOnInit(): void {
    if(this.loader) {
      setTimeout(() => { this.loader = false; }, 2000); // Skeleton Loader
    }
    console.log(this.document);
    // console.log(this.window['Snipcart'].api);
    
  }

  // Get Product Color
  Color(variants) {
    const uniqColor = [];
    for (let i = 0; i < Object.keys(variants).length; i++) {
      if (uniqColor.indexOf(variants[i].color) === -1 && variants[i].color) {
        uniqColor.push(variants[i].color)
      }
    }
    return uniqColor
  }
  
  // Change Variants
  ChangeVariants(color, product) {
    product.variants.map((item) => {
      if (item.color === color) {
        this.ImageSrc = item.image.src;
     
      }
    })
  }

  // Change Variants Image
  ChangeVariantsImage(src) {
    this.ImageSrc = src;
  }
  
  

  async addToCart(product: any) {
  try {
   const response = await this.window['Snipcart'].api.cart.items.add({
        id: product.meta.slug,
        name: product.title,
        price: product.price,
        url: `/shop/collection/left/sidebar/${product.meta.slug}`,
        // url: product.detail_url,
        image : `${this.ImageSrc ? this.ImageSrc : product.variants[0].image.src} `,
        
    });
   console.log(response)
} catch (error) {
    console.log(error)
}
 this.productService.addToCart(product);



  }

  addToWishlist(product: any) {
    this.productService.addToWishlist(product);
  }

  addToCompare(product: any) {
    this.productService.addToCompare(product);
  }

}
