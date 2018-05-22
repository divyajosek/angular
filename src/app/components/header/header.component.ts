import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {EmployeeService} from "../../employee.service";

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
  employeeCount=0;

  constructor(private empService:EmployeeService) { }

  ngOnInit() {
  this.empService.employeeListEvent.subscribe(
    res=>{this.employeeCount=res.length;
    })
  }

  buttonClick(index){
    this.selectedBtnIndex=index;
    this.onButtonClick.emit(index);
  }

}
