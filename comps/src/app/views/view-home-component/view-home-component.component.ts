import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-home-component',
  templateUrl: './view-home-component.component.html',
  styleUrls: ['./view-home-component.component.css']
})
export class ViewHomeComponentComponent implements OnInit {

  stat=[
    {'value':1595,'label':'# of Users'},
    {'value':3004,'label':'Revenue'},
    {'value':2497,'label':'satisfaction score'}
  ]
  images=[
    {'image':'assets/images/couch.jpeg', 'title':'Beautiful Couch', 'desc':'It is fantastic couch to sit on. grab it on 50% off diwali dhamaka'},
    {'image':'assets/images/dresser.jpeg', 'title':'Comfortable dresser', 'desc':'It is fantastic dresser to put on. grab it on 50% off diwali dhamaka'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
