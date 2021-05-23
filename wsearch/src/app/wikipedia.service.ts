import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor() { }

  public search(value:string){
    return value;
  }
}
