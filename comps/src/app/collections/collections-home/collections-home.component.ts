import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {

  data= [
    {name:'ashu',age:21,job:'designer'},
    {name:'nane',age:22,job:'design'},
    {name:'nandu',age:21,job:'designerh'}
  ]
  constructor() { }

  headers =[
    { key:'Name',label:'name'},
    { key:'Age',label:'age'},
    { key:'Job',label:'job'}
  ]

  ngOnInit(): void {
  }

}
