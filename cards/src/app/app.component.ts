import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 posts=[
   {
     title:'Neat Tree',
     imageUrl:'assets/tree.jpeg',
     username:'nature',
     content:'I saw tis neat tree today'
   },
   {
    title:'Snowy Mountain',
    imageUrl:'assets/mountain.jpeg',
    username:'mountainlover',
    content:'Here is apicture of a snowy mountain'
   },
   {
    title:'mountain biking',
    imageUrl:'assets/biking.jpeg',
    username:'biking',
    content:'I did some biking today'
   },
   {
    title:'mountain biking',
    imageUrl:'assets/biking.jpeg',
    username:'biking',
    content:'I did some biking today'
   }
 ]
}
