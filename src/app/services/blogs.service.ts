import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import * as firebase from 'firebase';
import { Blog } from "../blogs/blog";


@Injectable()

export class BlogsService {

  private blogs:Blog[]=[];
    blogsSubject = new Subject<Blog[]>();
    
    constructor() { }

    emitBlogsSubject() {
        this.blogsSubject.next(this.blogs.slice());
    }

    addBlog(title : string , content : string, created_at: string){

        const blogObject = {
          title : '',
          content : '',
          loveIts : 0,
          created_at : ''
        };
        blogObject.title = title;
        blogObject.content = content;
        blogObject.loveIts = 0;
        blogObject.created_at= created_at;
    
        this.blogs.push(blogObject);
        this.emitBlogsSubject();
      }

      saveBlogsToServer() {
        firebase.database().ref('/blogs').set(this.blogs);
    }

    getBlogs() {

         firebase.database().ref('/blogs').on('value', (data) => {
          this.blogs = data.val() ? data.val() : [];
          this.emitBlogsSubject();
        });
      }

    getSingleBlog(id: number) {
        return new Promise(
            (resolve, reject) => {
              firebase.database().ref('/blogs/' + id).once('value').then(
                (data) => {
                  resolve(data.val());
                },
                (error) => {
                  reject(error);
                });
            });
    }

    createNewBlog(newBlog: Blog) {

      this.blogs.push(newBlog);
    this.saveBlogsToServer();
    this.emitBlogsSubject();
        
    }

    removeBlog(blog :Blog) {
      const bookIndexRemove = this.blogs.findIndex(
        (blogEl)=> {
          if (blogEl == blog)
          return  true;
        }
      );
      this.blogs.splice(bookIndexRemove, 1);
      this.saveBlogsToServer();
      this.emitBlogsSubject();
    }

    LikeOne(index:number){
        this.blogs[index].loveIts +=1;
        this.emitBlogsSubject();
      }
      DislikeOne(index: number){
          this.blogs[index].loveIts -=1;
          this.emitBlogsSubject();
      
    }
}