import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogFormComponent } from './blog-form/blog-form.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';
import { Routes, RouterModule } from '@angular/router';
import {BlogsService} from './services/blogs.service';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const appRoutes: Routes = [
 
  { path: 'blogs', component: BlogViewComponent },
  { path: 'blogs/new', component: BlogFormComponent },
  { path: 'blog/view/:id', component: SingleBlogComponent },
  { path: '', redirectTo: 'blogs', pathMatch:'full'},
  { path: '**', redirectTo: 'blogs'}
];


@NgModule({
  declarations: [
    AppComponent,
    BlogsComponent,
    BlogFormComponent,
    SingleBlogComponent,
    BlogViewComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [BlogsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
