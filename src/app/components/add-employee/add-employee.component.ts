import { Component, OnInit, Output,EventEmitter, ViewChild } from '@angular/core';
import {employee} from '../../model/employee';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})

export class AddEmployeeComponent implements OnInit {
  @Output()
  onSubmit: EventEmitter<employee>  = new EventEmitter<employee>();

  @ViewChild('addForm')
  myForm:NgForm

  newEmployee: employee = new employee('', null);
  constructor() { }

  ngOnInit() {

    this.myForm.setValue({
      name:'Hari',
      age:27
    })
    
  }

  onAdd(){
    if(this.myForm.valid){
      this.onSubmit.emit(this.myForm.value);
      this.myForm.reset();
    }
    
  }

}
