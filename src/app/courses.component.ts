
import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector: "courses",
    template: `
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>


        <!-- Built in Pipes -->
        {{ title | uppercase | lowercase }} <br>
        {{ noStudent | number }} <br>
        {{ rating | number:"1.2-2" }} <br>
        {{ rating | number:"2.1-1" }} <br>
        {{ price | currency:"EUR":true:"2.1-1" }} <br>
        {{ releaseDate | date:"shortDate" }} <br>

        <!-- Custom Pipe -->
        {{ text | summary:10 }}


    `
})
export class CoursesComponent {
    title = "List of Courses";
    courses;

    constructor(service: CoursesService){
        this.courses = service.getCourses();
    }


    // Built in Pipes
    noStudent = 30265;
    rating = 4.9757;
    price = 190.95;
    releaseDate = new Date(2016, 3, 1);

    // Custom Pipe
    text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam libero sapien, fringilla vitae mi nec, pellentesque tempus nunc. Curabitur in neque massa. Duis vitae congue purus. Nulla euismod purus eu eleifend egestas. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam faucibus iaculis tristique. In non mattis nisi. Cras rhoncus at augue et dapibus. Maecenas at interdum tellus. Vivamus elementum tellus nibh, ut blandit lacus sollicitudin tempus. Duis eu nibh suscipit, gravida libero non, posuere lectus. Morbi eu nisl a arcu porta sollicitudin a vel eros. Nam bibendum sapien in rutrum dignissim. In aliquet, lectus ac."



}