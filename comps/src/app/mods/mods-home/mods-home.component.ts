import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {

  modalOpen=false;
  
  accordian=[
    {'title':' What is a dog?', 'desc':'A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.'},
    {'title':' What is a dog?', 'desc':'A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.'},
    {'title':' What is a dog?', 'desc':'A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.modalOpen=!this.modalOpen;
  }
}
