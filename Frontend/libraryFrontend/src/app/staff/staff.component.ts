import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
var ELEMENT_DATA:  any
@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  constructor(private http: HttpClient, private dialog: MatDialog) { }
  displayedColumns: string[] = ['ID', 'First Name', 'Last Name', 'Type','Join Date','End Date'];
  dataSource:any ;

  ngOnInit(): void {
    this.getAllStaffDetails();
  }
  getAllStaffDetails() {
    this.http.get(environment.apiUrl + 'getAllStaffDetails').subscribe(element => {
                 let data= JSON.parse(JSON.stringify(element))
      ELEMENT_DATA= data.value
      console.log(ELEMENT_DATA);
  this.dataSource = [...ELEMENT_DATA];
      
      
    })
  }

}

