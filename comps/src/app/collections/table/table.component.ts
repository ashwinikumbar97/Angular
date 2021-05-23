import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input('class') classNames=''; // class is name used in parent module which refered as classname here
  @Input() data=[];
  @Input() headers=[];

  constructor() { }

  ngOnInit(): void {
  }

}
