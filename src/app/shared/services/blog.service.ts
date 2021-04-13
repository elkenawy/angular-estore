import { Blog } from './../classes/blog';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, startWith } from 'rxjs/operators';
import { ProductService } from './product.service';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot } from '@angular/router';

const state = {
  blogs: JSON.parse(localStorage['blogs'] || '[]')
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  public Blog;
  public blog: Blog = {};
  router: any;

  constructor(private http: HttpClient, private productService: ProductService) { }

private get blogs(): Observable<Blog[]> {
return this.Blog = this.http.get<Blog[]>
  (`${this.productService.APIUrl}/api/v2/pages/?type=blog.BlogPage&fields=*`)
  .pipe(map(data => this.Blog = data["items"]));
}

 public get getBlogs(): Observable<Blog[]> {
   console.log(this.Blog)
   return this.blogs;
  }


  // Get Products By Slug
  public getBlogBySlug(slug: string): Observable<Blog> {
    return this.blogs.pipe(map(items => {
      return items.find((item: any) => {
        return item.meta.slug === slug;
      });
    }));
  }



 // Resolver
  async resolve(route: ActivatedRouteSnapshot): Promise<any> {
    await new Promise(resolve => setTimeout(resolve, 1000));    
    this.getBlogBySlug(route.params.slug).subscribe(blog => {
      if(!blog) { // When product is empty redirect 404
          this.router.navigateByUrl('/pages/404', {skipLocationChange: true});
      } else {
          this.blog = blog;
      }
    })
    return this.blog;
  }

}









