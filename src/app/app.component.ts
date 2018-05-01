import { Component } from '@angular/core';

interface Employee{
  name:string;
  age:number;
  selected?:boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
    title = 'Angular 5 app';
    selectedEmp;
    inputTxt1="Initial Search";

    employees:Array<Employee>=[{
      name : "divya",
      age :20
    },
    {
      name : "Annie",
      age :25
    }
  ]

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
}
