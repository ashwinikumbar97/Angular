import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css']
})
export class AccordianComponent implements OnInit {

  @Input() accordian=[];
  openedIndexItem=0;
  constructor() { }

  ngOnInit(): void {
  }

  onClick(value:number){
    if(value===this.openedIndexItem){
      this.openedIndexItem=-1;
    }
    else
    this.openedIndexItem=value;
  }

}
