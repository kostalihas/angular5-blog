import { Component, OnInit } from '@angular/core';
import {BLOGS}  from './blogs/mock-blogs';
import {Blog} from './blogs/blog';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  blogs : Blog[] = null;

  clock =  Observable
  .interval(1000)
  .map(()=>new Date());
  
ngOnInit(){
   this.blogs = BLOGS; 

}
}
