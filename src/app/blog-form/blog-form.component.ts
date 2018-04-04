import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlogsService } from '../services/blogs.service';
import { Router } from '@angular/router';
import { Blog } from '../blogs/blog';


@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css']
})
export class BlogFormComponent implements OnInit {

  blogForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private blogsService:BlogsService ,
    private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.blogForm= this.formBuilder.group({
      title:['',Validators.required],
      content:['',Validators.required]
    })
  }

  onSaveBlog(){

    const title = this.blogForm.get('title').value;
    const content = this.blogForm.get('content').value;
    const loveIts= 0;
    const created_at= new Date().toString();
    const newBlog = new Blog(title, content,loveIts,created_at);
    
    this.blogsService.createNewBlog(newBlog);
    this.router.navigate(['/blogs']);
  }

}
