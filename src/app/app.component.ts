import { Component } from '@angular/core';
import { isFavoriteChangeArgs } from './star/star.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: "app",
    isFavorite: true
  }

  onFavoriteChange(eventArgs: isFavoriteChangeArgs){
    console.log("Favorite Changed: " + eventArgs.newValue);
  }

  // tweet = {
  //   body: "Here is a body of the tweet...",
  //   isLiked: false,
  //   likesCount: 0
  // }


  // courses = [1, 2];


  // listView = 'map';


  // courses = [
  //   {id: 1, name: 'course1 '},
  //   {id: 2, name: 'course2 '},
  //   {id: 3, name: 'course3 '}
  // ]

  // onAdd(){
  //   this.courses.push({id: 4, name: 'course4 '});
  // }

  // onRemove(course){
  //   let index = this.courses.indexOf(course);
  //   this.courses.splice(index, 1);
  // }

  // onChange(course){
  //   course.name = "UPDATED";
  // }


  // courses;

  // loadingCourses(){
  //   this.courses = [
  //     {id: 1, name: 'course1 '},
  //     {id: 2, name: 'course2 '},
  //     {id: 3, name: 'course3 '}
  //   ]
  // }

  // trackCourse(index, course){
  //   return (course) ? course.id : undefined;
  // }
}
