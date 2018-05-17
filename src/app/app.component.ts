import { Component } from '@angular/core';
import {employee} from './model/employee';

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
    menuList:Array<String>=['Home','Contacts','About'];
    inputTxt1="Initial Search";
    buttonList:Array<string>=["View","Add"];

   /* employees:Array<Employee>=[{
      name : "divya",
      age :20
    },
    {
      name : "Annie",
      age :25
    }
  ]*/

  employees:Array<employee>=[new employee('divya' , 20),new employee('joseph' , 20)]
  
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

  newEmployee={
    name:'',
    age:null
  };
  addEmp(){
    this.employees.push(
      this.newEmployee
    )}

  deleteEmp(i){
    this.employees.splice(i,1);

  }
}
