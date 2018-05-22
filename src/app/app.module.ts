import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import {EmployeeService} from "./employee.service";
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeeDetailsComponent,
    AddEmployeeComponent,
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
