import { Component, Input, OnInit } from '@angular/core';
import { BlogsService } from '../services/blogs.service';
import { Blog } from './blog';


@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  @Input()  blogTitre: string;
  @Input()  blogContent: string;
  @Input() blogIsLikes: number;
  @Input() indexOfBlog : number;
  @Input() id: number;
  @Input() dateCreation : Date;
  @Input() blog : Blog;

  constructor(private blogsService: BlogsService) { }

  
ngOnInit(){
}
getStatus() {
  return this.blogIsLikes;
}


  setLike(){
    this.blogsService.LikeOne(this.indexOfBlog);
  }
  setDislike(index: number){
   this.blogsService.DislikeOne(this.indexOfBlog);
  }
  getColor() {
    
        if (this.blogIsLikes > 0)
        return  'green';

        else if (this.blogIsLikes < 0)
        return 'red';
    }

    onDeleteBlog(blog: Blog){

      this.blogsService.removeBlog(blog);

    }


}
