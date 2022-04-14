import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
var ELEMENT_DATA:any;
@Component({
  selector: 'app-visitor-details',
  templateUrl: './visitor-details.component.html',
  styleUrls: ['./visitor-details.component.css']
})
export class VisitorDetailsComponent implements OnInit {

  constructor(private http:HttpClient) { }
  displayedColumns: string[] = ['ID', 'Checkin', 'CheckOut'];
  dataSource:any;
  ngOnInit(): void {
    this.getAllStaffDetails();
  }
  getAllStaffDetails() {
    this.http.get(environment.apiUrl + 'visitorDetails').subscribe(element => {
                 let data= JSON.parse(JSON.stringify(element))
      ELEMENT_DATA= data.value
      console.log(ELEMENT_DATA);
  this.dataSource = [...ELEMENT_DATA];      
    })
  }
}
