import { BlogService } from './../../../shared/services/blog.service';
import { Blog } from './../../../shared/classes/blog';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-left-sidebar',
  templateUrl: './blog-left-sidebar.component.html',
  styleUrls: ['./blog-left-sidebar.component.scss']
})
export class BlogLeftSidebarComponent implements OnInit {
blogs: Blog[]= [];

  constructor(public blogService: BlogService) {
   this.blogService.getBlogs.subscribe(data => this.blogs = data );
  }


  ngOnInit(): void {
  }

}
