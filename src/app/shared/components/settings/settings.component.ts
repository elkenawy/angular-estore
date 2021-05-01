import { LangService } from './../../services/lang.service';
import { Component, OnInit, Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { Product } from '../../classes/product';
import { ProductService } from '../../services/product.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  [x: string]: any;
  window: Window & typeof globalThis;

  public products: Product[] = [];
  public search = false;

  public languages = [{
    name: 'English',
    code: 'en'
  }, {
    name: 'Arabic',
    code: 'ar'
  }];

  public currencies = [{
    name: 'Euro',
    currency: 'EUR',
    price: 0.90 // price of euro
  }, {
    name: 'Rupees',
    currency: 'INR',
    price: 70.93 // price of inr
  }, {
    name: 'Pound',
    currency: 'GBP',
    price: 0.78 // price of euro
  }, {
    name: 'Dollar',
    currency: 'USD',
    price: 1 // price of usd
  }];

  constructor(@Inject(PLATFORM_ID) private platformId: Object,
              public productService: ProductService,
              private translate: TranslateService,
              @Inject(DOCUMENT) private document: Document) {
    this.productService.cartItems.subscribe(response => this.products = response);
    this.window = this.document.defaultView;

  }


  ngOnInit(): void {
    console.log(this.window['Snipcart'].api.cart.items);
      this.translate.use(localStorage['lang']);
    if (localStorage['lang'] === 'ar'){
      document.body.classList.remove('ltr');
      document.body.classList.add('rtl');
    }else{
       document.body.classList.remove('rtl');
       document.body.classList.add('ltr');
    }
    
  }

  searchToggle(){
    this.search = !this.search;
  }

  changeLanguage(code){
    console.log(code);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('lang', code);
      this.translate.use(code);
    
    }
    window.location.reload();
  }

  get getTotal(): Observable<number> {
    return this.productService.cartTotalAmount();
  }

  async removeItem(product: any) {
    this.productService.removeCartItem(product);
    try {
    await this.window['Snipcart'].api.cart.items.remove('{itemUniqueId}');
} catch (error) {
    console.log(error)
}
  }

  changeCurrency(currency: any) {
    this.productService.Currency = currency;
  }

}
