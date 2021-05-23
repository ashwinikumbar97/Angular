import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string='';
  date:string='';
  currency:number;
  height:number;
  miles:number; 
  selectedUnit:string;
  websiteList: any = ['m', 'km', 'cm']

  onNameChange(value:string){
    this.name=value;
  }

  onDateChange(value:string){
    this.date=value;
  }
  onCurrencyChange(value:number){
    this.currency=value;
  }
  onHeightChange(value:number){
    this.height=value;
  }
  onMileChange(value:string){
    this.miles=parseFloat(value);
  }

  selected(value:string){
    this.selectedUnit=value;
  }

  
}
