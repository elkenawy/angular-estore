import { Home } from './../classes/home';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductService } from './product.service';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeContentService {

    public Content;


  constructor(private http: HttpClient, private productService: ProductService) { }


private get content(): Observable<Home[]> {
return this.Content = this.http.get<Home[]>
  (`${environment.APIUrl}/api/v2/pages/?type=home.HomePage&fields=*`)
  .pipe(map(data => this.Content = data["items"]));
}

 public get getContent(): Observable<Home[]> {
   console.log(this.Content);
   return this.content;
  }


}
