import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { BlogsService } from '../services/blogs.service';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {

  blogs: any[];
  blogSubscription : Subscription;

  constructor(private blogsService: BlogsService) { }

  ngOnInit() {

   
    this.blogSubscription = this.blogsService.blogsSubject.subscribe(
      (blogs: any[]) => {
        this.blogs = blogs;
      }
    );
    this.blogsService.getBlogs();
    this.blogsService.emitBlogsSubject();
  }

  onSave(){
    this.blogsService.saveBlogsToServer();
  }

 
  

}
