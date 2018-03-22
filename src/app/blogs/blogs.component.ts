import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent {

  constructor() { }
  @Input() blogTitle: string;
  @Input() blogContent : string;
  @Input() blogLike : number = 0 ;
  @Input() dateCreation: Date;

  setLike(){
    this.blogLike +=1 ;
    return this.blogLike;
  }
  setDislike(){
    this.blogLike -=1;
    return this.blogLike;
  }

  getColor() {
    if(this.blogLike > 0) {
      return 'green';
    } else if(this.blogLike <0 ) {
      return 'red';
    }


}
