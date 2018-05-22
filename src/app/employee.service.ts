import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';


import { employee } from './model/employee';

@Injectable()
export class EmployeeService {
    employeeListEvent: Subject<employee[]>  = new Subject<employee[]>();
    constructor(private http: HttpClient){

    }

    getEmployees(){

        return this.http
                        .get('/assets/employee.json')
                        .map((employees: Array<employee>) => {
                            employees.push({
                                name: 'Rajnikanth',
                                age: 30
                            });
                            this.employeeListEvent.next(employees);
                            return employees;
                        });
    }
}