import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { PostsService } from '../services/posts.service';
import { NotFoundError } from '../common/not-found-error';
import { AppError } from '../common/app-error';
import { BadRequestError } from '../common/bad-request-error';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[];

  constructor(private service: PostsService) { 
  }

  ngOnInit(){
    this.service.getAll()
        .subscribe(posts => this.posts = posts);
  }

  createPost(input: HTMLInputElement){
    let newPost = { title: input.value };
    this.posts.splice(0, 0, newPost);

    input.value = '';

    this.service.create(newPost)
        .subscribe(
          post => {
            newPost['id'] = post.id;
          }, 
          (error: AppError) => {
            this.posts.splice(0, 1);
            if(error instanceof BadRequestError){
              // this.form.setErrors(error.originalError);
            }
            else throw error;
          });
  }

  updatePost(post){
    this.service.patch(post)  // only a part of object
        .subscribe(
          updatedPost => {
              console.log(updatedPost);
          });
    
    // this.service.put(post)    // entire object
    //     .subscribe(response => {
    //         console.log(response.json());
    //     });
  }

  deletePost(post){

    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(post.id)
        .subscribe(
          () => {
            console.log(post);
          }, 
          (error: AppError) => {
            this.posts.splice(index, 0, post);
            if(error instanceof NotFoundError){
              alert('Post is already deleted.');
            }
            else throw error;
          });
  }

}
