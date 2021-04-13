import { BlogService } from 'src/app/shared/services/blog.service';
import { Component, OnInit, Input } from '@angular/core';
import { BlogSlider } from '../../../shared/data/slider';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  
  blogs: any[] = [];

  constructor(public blogService: BlogService) {
    this.blogService.getBlogs.subscribe(data => this.blogs = data );
   }

  ngOnInit(): void {
  }

  public BlogSliderConfig: any = BlogSlider;

}
