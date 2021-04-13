import { Component, Input, OnInit } from '@angular/core';
import { Blog } from 'src/app/shared/classes/blog';
import { BlogService } from 'src/app/shared/services/blog.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {
blogs: Blog[] = [] ;

  constructor(public blogService: BlogService) {
      this.blogService.getBlogs.subscribe(data => this.blogs = data );
  }

  ngOnInit(): void {
  }

}
