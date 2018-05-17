import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  list:Array<string>;

  @Input()
  buttonList:Array<string>;

  @Output()
  onButtonClick:EventEmitter<number> = new EventEmitter<number>();
  
  selectedBtnIndex=0;

  constructor() { }

  ngOnInit() {
  }

  buttonClick(index){
    this.selectedBtnIndex=index;
    this.onButtonClick.emit(index);
  }

}
