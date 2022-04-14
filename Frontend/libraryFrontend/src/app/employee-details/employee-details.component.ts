import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
var ELEMENT_DATA: any
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private http:HttpClient) { }
  displayedColumns: string[] = ['ID', 'Firstname', 'Lastname', 'ssn','type','othermail','campusmail','joindate','enddate'];
  dataSource:any;
  ngOnInit(): void {
    this.getAllDetails();
  }
  getAllDetails() {
    this.http.get(environment.apiUrl + 'employeeDetails').subscribe(element => {
      let data = JSON.parse(JSON.stringify(element))
      ELEMENT_DATA = data.value
      console.log(ELEMENT_DATA);
      this.dataSource = [...ELEMENT_DATA];
    })
  }
  dialogModalNavigate(){

  }
}
