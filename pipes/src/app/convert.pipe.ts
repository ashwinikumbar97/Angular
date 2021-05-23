import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: number, targetUnits:string): unknown {
    if(!value)
    return '';

    switch(targetUnits){
      case 'km' : return value *1.6;
      case 'm':return value*1609.34;
      case 'cm': return value*1609.34*1000;
      default: new Error('Target unit not supported');
      ;
    }
    
  }

}
