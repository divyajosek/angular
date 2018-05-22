import { Component } from '@angular/core';
import {employee} from './model/employee';
import {EmployeeService} from "./employee.service";

import {NgForm} from '@angular/forms';

/*interface Employee{
  name:string;
  age:number;
  selected?:boolean;
}*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
    title = 'Angular 5 app';
    selectedEmp;
    activeViewIndex=0;
    viewAdd;
    employees:Array<employee>=[];

    menuList:Array<String>=['Home','Contacts','About'];
    inputTxt1="Initial Search";
    buttonList:Array<string>=["View","Add"];

    constructor(private service:EmployeeService){

    }

    ngOnInit() {
      const empObser = this.service.getEmployees();
      empObser.subscribe((res:Array<employee>) => {this.employees = res});
    }

   /* employees:Array<Employee>=[{
      name : "divya",
      age :20
    },
    {
      name : "Annie",
      age :25
    }
  ]*/

  //employees:Array<employee>=[new employee('divya' , 20),new employee('joseph' , 20)]
  
  clearAll(){
    this.employees.forEach(e=>e.selected=false)
  }
  selectEmployee(e){
    this.clearAll();
    e.selected=true;
    this.selectedEmp=e;
    
  }

  myClick(inputVal){
    alert(inputVal);
  }

  myClick1(){
    this.inputTxt1="modified";
  }

  view(viewIndex){
    this.activeViewIndex=viewIndex;  
}
  /* Reference Method

  addEmp(nameVal,ageVal){
    this.employees.push(
      {
        name:nameVal,
        age:ageVal
      }
    )

  }*/

 
  addEmp(employee){
    alert("hello");
    this.employees.push(
      employee
    )
  this.service.employeeListEvent.next(this.employees);
  }

  deleteEmp(i){
    this.employees.splice(i,1);
    this.service.employeeListEvent.next(this.employees);
  }
}
