import { Directive , ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class AppTimesDirective {
  constructor(
    private viewContainerRef:ViewContainerRef,
 private temaplateRef:TemplateRef<any>
  ) { }

  @Input('appTimes') set render(times: number){
    this.viewContainerRef.clear();

    for(let i=0;i<times;i++){
      this.viewContainerRef.createEmbeddedView(this.temaplateRef,{
        index:i
      });
    }
  }

}
