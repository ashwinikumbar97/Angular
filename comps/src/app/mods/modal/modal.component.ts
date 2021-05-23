import { Component, OnInit , ElementRef,Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Output() close= new EventEmitter();
  constructor(private el:ElementRef) { } //elementRef is to ref app template element,this element to become relative to app-module class

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy(){
    this.el.nativeElement.remove();
  }
  closeOnClick(){
    this.close.emit();
  }

}
