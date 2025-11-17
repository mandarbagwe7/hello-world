import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  authors;
  isActive = true;

  constructor(service: AuthorsService){
      this.authors = service.getAuthors();
  }

  // Event Binding
  onSave($event){
    $event.stopPropagation();  // To stop event bubbling
    console.log("Button was Clicked", $event);
  }

  // Event Binding with Event Bubbling
  onDiv(){
    console.log("Div was clicked");
  }

  // Passing Event to check Enter Key
  // onKeyUp($event){
  //   if($event.keyCode === 13) console.log("Enter was pressed");
  // }

  // Enter key without passing event
  // onKeyUp(){
  //   console.log("Enter was pressed.");
  // }

  // Passing event to get field value
  // onKeyUp($event){
  //   console.log($event.target.value);
  // }

  // Directly passing input field value
  // onKeyUp(email){
  //   console.log(email);
  // }


  //Two Way Binding and ngModel
  email = "me@example.com";

  onKeyUp(){
    console.log(this.email);
  }

  ngOnInit() {
  }

}
